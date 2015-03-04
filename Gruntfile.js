module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var block = grunt.option('block'),
        Release = require('./grunt/Release'),
        release = new Release(grunt.option('ver'));

    grunt.initConfig({
        clean: {
            test: ['test/*.js']
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
                        'node_modules/simulant/simulant.js',
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
        },
        mochaTest: {
            tpl: {
                options: {
                    reporter: 'spec',
                    require: [
                        './test/helpers/chai-assert.js',
                        './test/helpers/bemer.js',
                        './test/components.bemer.js',
                        './test/helpers/html-differ.js'
                    ]
                },
                src: ['test/components.tpltest.js']
            }
        },
        uglify: {
            release: {
                options: {
                    preserveComments: 'some'
                },
                files: { 'components.min.js': 'components.js' }
            }
        },
        shell: {
            prerelease: release.getShellPreRelease(),
            release:  {
                command: function() {
                    return grunt.config('isReleaseOk')
                        ? release.getShellRelease()
                        : '';
                }
            }
        },
        prompt: {
            release: {
                options: {
                    questions: [
                        {
                            config: 'isReleaseOk',
                            type: 'confirm',
                            default: false,
                            message: 'Please check is everything alright'
                        }
                    ]
                }
            }
        }
    });

    grunt.registerTask('test:js', ['clean:test', 'bemaker', 'concat:test', 'karma']);
    grunt.registerTask('test:tpl', ['clean:test', 'bemaker', 'mochaTest:tpl']);
    grunt.registerTask('test', ['test:js', 'test:tpl']);

    grunt.registerTask('release', function() {
        release.changeJsonFilesVersion();

        grunt.task.run('test', 'clean:test');
        grunt.task.run('bemaker', 'concat:release', 'uglify:release');

        grunt.task.run('shell:prerelease');

        grunt.task.run('prompt:release');
        grunt.task.run('shell:release');
    });

};
