module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: [
                    "./scripts/**/*.js",
                    "./styles/**/*.css",
                    "./index.html",
                    "!node_modules/**/*.js"
                ],
                tasks: ["eslint", "browserify", "copy"],
                options: {
                    spawn: false,
                },
            }
        },
        eslint: {
            src: [
                "./scripts/**/*.js",
                "!node_modules/**/*.js"
            ]
        },
        browserify: {
            dist: {
                files: {
                    "../dist/bundle.js": ["scripts/**/*.js"]
                }
            }
        },
        copy: {
            main: {
              files: [
                // includes files within path
                {expand: true, src: ["index.html"], dest: "../dist", filter: "isFile"},
                {expand: true, src: ["styles/*.css"], dest: "../dist/", filter: "isFile"},
              ],
            },
          },
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    // Default task(s).
    grunt.registerTask("default", ["eslint", "browserify", "copy", "watch"]);
};
