# angular-color-selector

![Node.js CI](https://github.com/radocode/angular-color-selector/workflows/Node.js%20CI/badge.svg)
![Heroku Deploy](https://github.com/radocode/angular-color-selector/workflows/Heroku%20Deploy/badge.svg)

This app shows a list of selectable colors, which you can select and copy its Hex value to the clipboard! Uses https://reqres.in/api/colors as API.

# How to install dependencies and run the project

1. In the root directory of the project, install using:

```sh
npm install
```

2. Then execute "npm start" and open `localhost:4200` on your browser:

```sh
npm start
```

# Frameworks and libraries used

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)

# Docker:

To build the app:

```sh
sudo docker build -t angular-color-selector .
```

And to run the app:

```sh
sudo docker run -d --name angular-color-selector -p 80:80 angular-color-selector
```
