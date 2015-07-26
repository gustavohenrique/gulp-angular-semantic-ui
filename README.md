Gulp + AngularJs + Semantic-UI
==============================

> [Yeoman](http://yeoman.io) generator for beautiful and responsive webapp

## Demo

[http://gustavohenrique.github.io/gulp-angular-semantic-ui](http://gustavohenrique.github.io/gulp-angular-semantic-ui/)

## Features

* Built-in preview server with livereload
* Automagically lint your scripts
* Awesome image optimization
* Token authentication
* Login form
* Table with pagination
* E2E tests using Protractor
* Unit tests using Mocha + Chai
* CSS Autoprefixing

## Getting Started

- Install: `npm install -g gulp bower yo generator-gulp-angular-semantic-ui`
- Run: `yo gulp-angular-semantic-ui` to create the skel and install all the
dependencies into current directory or `yo gulp-angular-semantic-ui --skip-install`
to only create the skel and skips the automatic execution of `bower` and `npm`

### Watching

* `gulp serve`: run a localhost server listen on port 9000

### Building

* `gulp build`: concat all html, js and css files and minify them to the `dist` directory

### Testing

* Run `node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update` to install the drivers
* Open a terminal window and run `gulp serve` to run the application
* Open another terminal window and run `gulp webdriver` to start a standalone webdriver (if youren't using Chrome)
* Run `gulp e2e` to run the e2e tests
* For unit tests, run `npm test`

## License

[MIT license](http://opensource.org/licenses/MIT)
