//Grunt is a great tool to help you automate a lot of your development process
//within this document are many different functions of Grunt, to run this you need to
//uncomment everything starting from 'module.exports' and then read the rest of the 
//comments to see what each function does
//ALSO - order to run Grunt for your project you will need to have npm installed globally on
//your machine and then run 'npm install' in your command line so that it looks at your
//project.json file and compiles the proper modules in the 'node_modules' folder.
//once you have done that then you can simply run 'grunt' in your command line once you are within
//your project directory

module.exports = function(grunt) {

    grunt.initConfig({
        
        //jshint will help you debug your js
        /*jshint: {
            all: ['www/js/*.js']
        },*/

        //this concatenates your controllers.js and app.js together into a file named all.js
        //which resides within the path: www/dist/js
        concat: {
            dist: {
                files: {
                    'www/dist/js/all.js' : ['www/js/app.js', 'www/js/controllers.js']
                }
            }
        },

        //this 'uglifies' your all.js file (minimizing it by taking out all of the spaces) and then
        //stores it in main.min.js which is found within: www/dist/
        //main.min.js is perfect for production apps as it reduces the file size
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'www/dist/main.min.js': ['www/dist/js/all.js']
                }
            }
        },

        //this minifies your image files within the path: www/img
        //with image types of .jpg, .gif, .png, .svg, and .jpeg
        //and then stores the images in: www/dist/img/
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'www/img/',
                    src: ['***.{jpg,gif,png,svg,jpeg}'],
                    dest: 'www/dist/img/'
                }]
            }
        },

        //this, much like jshint, helps you debug your css files, right now it looks at the
        //style.css and reset.css files
        csslint: {
            all: ['www/css/reset.css', 'www/css/style.css']
        },

        //this minifies style.css and reset.css and then stores it in style.min.css within the
        //path: www/dist/
        cssmin: {
            dist: {
                files: {
                    'www/dist/style.min.css': ['www/css/reset.css', 'www/css/style.css']
                }
            }
        },

        //this autoprefixes your style.min.css file so that you don't have to worry about annoying
        //css prefixes
        autoprefixer: {
            all: {
                src: 'www/dist/style.min.css'
            }
        },

        //this is a great function of Grunt, it watches for file changes and then runs the specified tasks
        //in this case it looks for any file changes in www/js/ or in www/css/ and then runs
        //the following tasks: jshint, concat, uglify, csslint, cssmin, and autoprefixer
        //to activate this run 'grunt watch' in your command line
        watch: {

            js: {
                files: ['www/js/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },

            css: {
                files: ['www/css/*.css'],
                tasks: ['csslint', 'cssmin', 'autoprefixer']
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        //'jshint',
        'concat',
        'uglify',
        'imagemin',
        'csslint',
        'cssmin',
        'autoprefixer'
    ]);
};