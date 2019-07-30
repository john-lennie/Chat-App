# Chatty-React-App

!(https://github.com/john-lennie/Chatty-React-App/blob/master/build/screenshot.png)

Works with https://github.com/john-lennie/Chatty-WebSockets-Server

Follow instructions to start up the WebSockets Server linked above, then start up this server which serves the front end react app.

To install the dependencies and start the server:

```
npm install
npm start
open http://localhost:3000
```

### Static Files

Static files like images, fonts, etc can be stored in the `build` folder.

For example, a file called my_image.png in the build folder can be accessed using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
