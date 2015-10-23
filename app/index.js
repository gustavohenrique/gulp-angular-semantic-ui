'use strict';

var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);

        this.option('skip-install', {
            desc: 'Skips the installation of dependencies',
            type: Boolean
        });
    },

    initializing: function() {
        this.pkg = require('../package.json');
    },

    writing: {
        gulpfile: function() {
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
        },

        packageJSON: function() {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
        },

        git: function() {
            this.copy('gitignore', '.gitignore');
            this.copy('gitattributes', '.gitattributes');
        },

        bower: function() {
            var bower = {
                name: _s.slugify(this.appname),
                private: true,
                dependencies: {
                    'angular': '~1.4.7',
                    'angular-route': '~1.4.7',
                    'angular-loading-bar': '~0.8.0',
                    'semantic-ui': '~2.1.4'
                }
            };

            this.fs.writeJSON('bower.json', bower);
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
        },

        jshint: function() {
            this.copy('jshintrc', '.jshintrc');
        },

        editorConfig: function() {
            this.copy('editorconfig', '.editorconfig');
        },

        mainStylesheet: function() {
            var css = 'main.css';
            this.copy(css, 'app/styles/' + css);
        },

        writeIndex: function() {
            var params = {
                appname: this.appname
            };

            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath('app/index.html'),
                params
            );
        },

        app: function() {
            mkdirp('app');
            mkdirp('app/styles');
            mkdirp('app/images');
            mkdirp('app/fonts');
            this.directory('scripts', 'app/scripts');
            this.directory('partials', 'app/partials');
        },

        tests: function () {
            this.directory('tests', 'tests');
        }
    },

    install: function() {
        var howToInstall = '\nNow you need to run: ' + chalk.yellow.bold('bower install && npm install');
        this.log(howToInstall);
        // if (this.options['skip-install']) {
        //     this.log(howToInstall);
        //     return;
        // }

        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });

    }
});
