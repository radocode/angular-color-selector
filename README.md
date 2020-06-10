# Colores-app

![Node.js CI](https://github.com/radocode/angular-color-selector/workflows/Node.js%20CI/badge.svg)
![Heroku Deploy](https://github.com/radocode/angular-color-selector/workflows/Heroku%20Deploy/badge.svg)

Esta app entrega una lista de colores, y que tras elegir color lo puedes copiar en tu portapapeles! Utiliza como API https://reqres.in/api/colors

# Cómo instalar las dependencias y correr el proyecto

1. Ve a la carpeta del proyecto e instala las dependencias:

```sh
npm install
```

2. Luego ejecuta el servidor de desarrollo, y abre `localhost:4200` en tu browser:

```sh
npm start
```

# Listado de las tecnologías o frameworks utilizados

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)

# Docker:

Para construir el app:

```sh
sudo docker build -t angular-color-selector .
```

Y para correr el app:

```sh
sudo docker run -d --name angular-color-selector -p 80:80 angular-color-selector
```
