module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var Test = require('./grunt/Test'),
        test = new Test(grunt.option('block'));

    grunt.initConfig({
        clean: {
            test: ['!test/.gitkeep', 'test/*']
        },
        mochaTest: {
            main: { src: ['test/*'] },
            options: { reporter: 'spec' }
        },
        mocha_phantomjs: {
            all: ['test/index.html']
        },
        karma: {
            test: {
                options: {
                    files: [
                        'bower_components/es5-shim/es5-shim.js',
                        'bower_components/bemer/bemer.js',
                        'test/test.js'
                    ]
                },
                runnerPort: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR',
                frameworks: ['mocha', 'chai'],
                reporters: ['mocha'],
                client: {
                    mocha: {
                        ui: 'bdd'
                    }
                }
            }
        }
    });

    grunt.registerTask('test', function() {
        test.build();
        grunt.task.run('karma');
    });

};
