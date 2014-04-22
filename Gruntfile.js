module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['assets/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server']
      },
      coffee: {
        files: ['assets/_coffee/**/*.coffee'],
        tasks: ['coffee:dist']
      },
      livereload: {
        files: [
          '*.php',
          'assets/js/**/*.{js,json}',
          'assets/css/*.css',
          'assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/_scss',
          src: '*.{scss,sass}',
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },
    coffee: {
      dist: {
        files: {
          'assets/js/app.js': 'assets/coffee/app.coffee',
          'assets/js/front.js': 'assets/coffee/front.coffee',
          'assets/js/members.js': 'assets/coffee/members.coffee',
          'assets/js/checkout.js': 'assets/coffee/checkout.coffee',
          'assets/js/sponsors.js': 'assets/coffee/sponsors.coffee'
        }
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/assets/_coffee',
          src: '**/*.coffee',
          dest: 'assets/js',
          ext: '.js'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img'
        }]
      }
    }
  });
  grunt.registerTask('default', ['sass:dist', 'coffee:dist', 'imagemin', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
