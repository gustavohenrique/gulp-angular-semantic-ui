'use strict';
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('test-framework', {
      desc: 'Test framework to be invoked',
      type: String,
      defaults: 'mocha'
    });

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      this.log(yosay('I include HTML5 Boilerplate, AngularJS, Semantic UI and a gulpfile.js to build your app.'));
    }
  },

  writing: {
    gulpfile: function() {
      this.template('gulpfile.js');
    },

    packageJSON: function() {
      this.template('_package.json', 'package.json');
    },

    git: function() {
      this.copy('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
    },

    bower: function() {
      var bower = {
        name: this._.slugify(this.appname),
        private: true,
        dependencies: {
          'angularjs': '~1.3.8',
          'semantic': '~1.3.2 '
        }
      };

      this.copy('bowerrc', '.bowerrc');
      this.write('bower.json', JSON.stringify(bower, null, 2));
    },

    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },

    editorConfig: function () {
      this.copy('editorconfig', '.editorconfig');
    },


    mainStylesheet: function () {
      var css = 'main.css';
      this.copy(css, 'app/styles/' + css);
    },

    writeIndex: function () {
      this.indexFile = this.src.read('index.html');
      this.indexFile = this.engine(this.indexFile, this);

      var bs = 'bower_components/';
      this.indexFile = this.appendScripts(this.indexFile, 'scripts/plugins.js', [
        bs + 'affix.js',
        bs + 'alert.js',
        bs + 'dropdown.js',
        bs + 'tooltip.js',
        bs + 'modal.js',
        bs + 'transition.js',
        bs + 'button.js',
        bs + 'popover.js',
        bs + 'carousel.js',
        bs + 'scrollspy.js',
        bs + 'collapse.js',
        bs + 'tab.js'
      ]);

      var jsFiles = 
      this.indexFile = this.appendFiles({
        html: this.indexFile,
        fileType: 'js',
        optimizedPath: 'scripts/app.js',
        sourceFileList: ['scripts/app.js']
      });

      this.write('app/index.html', this.indexFile);
    },

    app: function () {
      this.mkdir('app');
      this.mkdir('app/scripts');
      this.mkdir('app/styles');
      this.mkdir('app/images');
      this.mkdir('app/fonts');
      this.copy('scripts/app.js', 'app/scripts/app.js');
      this.copy('scripts/app-controller.js', 'app/scripts/app-controller.js');
      this.copy('scripts/app-service.js', 'app/scripts/app-service.js');
      this.copy('scripts/app-directives.js', 'app/scripts/app-directives.js');
    }
  },

  install: function () {
    var howToInstall =
      '\nAfter running ' +
      chalk.yellow.bold('npm install & bower install');

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }

    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });

    this.on('end', function () {

      // ideally we should use composeWith, but we're invoking it here
      // because generator-mocha is changing the working directory
      // https://github.com/yeoman/generator-mocha/issues/28
      this.invoke(this.options['test-framework'], {
        options: {
          'skip-message': this.options['skip-install-message'],
          'skip-install': this.options['skip-install']
        }
      });
    }.bind(this));
  }
});
