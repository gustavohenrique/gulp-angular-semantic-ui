/*global describe, beforeEach, it*/
'use strict';

var fs = require('fs');
var util = require('util');
var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;

describe('gulp-angular-semantic-ui generator slug name', function() {
    beforeEach(function(done) {
        helpers.testDirectory(path.join(__dirname, 'slug'), function(err) {
            if (err) {
                return done(err);
            }

            this.webapp = helpers.createGenerator('gulp-angular-semantic-ui:app', [
                '../../app', [
                    helpers.createDummyGenerator(),
                    'mocha:app'
                ]
            ]);
            this.webapp.options['skip-install'] = true;

            done();
        }.bind(this));
    });

    it('should generate the same appName in html file', function(done) {
        var expectedAppName = 'slug';
        var expected = ['app/index.html'];

        this.webapp.run({}, function() {
            helpers.assertFile(expected);
            var indexHtml = fs.readFileSync('app/index.html', 'utf8');
            var regexHtml = new RegExp('<title>' + expectedAppName + ' by gulp-angular-semantic-ui yeoman generator</title>');
            assert.ok(regexHtml.test(indexHtml), 'index.html template using a wrong appName');
            done();
        });
    });


    it('should generate the same appName in bower.json file', function(done) {
        var expectedAppName = 'slug';
        var expected = ['bower.json'];

        this.webapp.run({}, function() {
            helpers.assertFile(expected);
            var bowerJson = fs.readFileSync('bower.json', 'utf8');
            var regexJs = new RegExp('"name": "' + expectedAppName + '"');
            assert.ok(regexJs.test(bowerJson), 'bower.json template using a wrong appName');
            done();
        });
    });
});