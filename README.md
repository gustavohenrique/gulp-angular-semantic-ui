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

### Creating

```shell
npm install -g gulp bower yo generator-gulp-angular-semantic-ui
mkdir mywebproject && cd mywebproject
yo gulp-angular-semantic-ui
bower install
npm install
```

### Watching

* Run a localhost server listen on port 9000:
`gulp serve`

### Building

* Concat all html, js and css files and minify them to the *dist* directory:
`gulp build`:

### Testing

* Install the drivers:
`node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update`
* Run the server via terminal:
`gulp serve`
* Start a standalone webdriver instance (if you aren't using Chrome):
`gulp webdriver`
* Run the e2e tests:
`gulp e2e`
* For unit tests:
`npm test`

## Changes

#### v0.9.0
* AngularJS 1.47
* Semantic-UI 2.1.4
* Removed gulp-postcss

## License

[MIT license](http://opensource.org/licenses/MIT)
