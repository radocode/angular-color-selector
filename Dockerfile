# stage1 as builder
FROM node:10-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /angular-color-selector && mv ./node_modules ./angular-color-selector

WORKDIR /angular-color-selector

COPY . .

# Build the project and copy the files
RUN npm run ng build -- --deploy-url=/envapp/ --prod


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /angular-color-selector/dist /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
