# AngularJs + Semantic-UI + Gulp

> [Yeoman](http://yeoman.io) generator for basic CRUD responsive app using [gulp](http://gulpjs.com/) for the build process

## Demo

[http://gustavohenrique.github.io/gulp-angular-semantic-ui](http://gustavohenrique.github.io/gulp-angular-semantic-ui/)

## Features

Please see our [gulpfile.js](app/templates/gulpfile.js) for up to date information on what we support.

* CSS Autoprefixing
* Built-in preview server with livereload
* Automagically lint your scripts
* Awesome image optimization
* Token authentication
* Login form
* Table with pagination

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*


## Getting Started

- Install: `npm install -g generator-gulp-angular-semantic-ui`
- Run: `yo gulp-angular-semantic-ui`
- Run `gulp` for building to the `dist` directory and `gulp serve` for preview

## Running tests

* Run `node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update` to install the drivers
* Open a terminal window and run `gulp serve` to run the application
* Open another terminal window and run `gulp webdriver` to start a standalone webdriver (if youren't using Chrome)
* Run `gulp e2e` to run the tests


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

To install dependencies, run `bower install --save package-name` to get the files, then add a `script` or `style` tag to your `index.html` or another appropriate place.

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
