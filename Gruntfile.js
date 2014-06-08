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
        }
    });

    grunt.registerTask('test', function() {
        test.build();
        grunt.task.run('mocha_phantomjs');
    });

};
