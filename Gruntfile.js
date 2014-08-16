module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var block = grunt.option('block');

    grunt.initConfig({
        clean: {
            test: ['!test/.gitkeep', 'test/*']
        },
        bemaker: {
            main: {
                directories: ['blocks'],
                outname: 'components',
                outdir: 'test',
                blocks: block && [block]
            }
        },
        concat: {
            test: {
                src: [
                    'test/components.js',
                    'test/components.bemer.js',
                    (block ? 'blocks/' + block : 'test') + '/' + (block || 'components') + '.test.js'
                ],
                dest: 'test/components.all.js'
            },
            release: {
                src: ['test/components.js', 'test/components.bemer.js'],
                dest: 'components.js'
            }
        },
        karma: {
            test: {
                options: {
                    files: [
                        'bower_components/es5-shim/es5-shim.js',
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/lodash/dist/lodash.js',
                        'bower_components/i-bem/i-bem.js',
                        'bower_components/bemer/bemer.js',
                        'test/components.all.js'
                    ]
                },
                runnerPort: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR',
                frameworks: ['mocha', 'chai'],
                reporters: ['mocha']
            }
        }
    });

    grunt.registerTask('test', ['clean:test', 'bemaker', 'concat:test', 'karma']);

};
