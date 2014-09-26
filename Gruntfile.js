module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      endpoint: "."
    },
    stylus: {
      compile: {
        options: {compress: false},
        files: {
            '_src/css/bbtoolkit.css': '_src/stylus/bbtoolkit.styl'
          }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          data: grunt.file.readJSON('_src/bbtoolkit.json')
        },
        files: [
          {expand: true, cwd: '_src/jade', src: ['**/*.jade', '!layout.jade'], dest: '<%=meta.endpoint%>/', ext: '.html'}
        ]
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['_src/js/respond.js', '_src/js/bootstrap.min.js', '_src/js/jquery.cookie.js', '_src/js/smoothscroll.min.js', '_src/js/list.min.js', '_src/js/fastclick.min.js', '_src/js/bbtoolkit.js'],
        dest: '<%=meta.endpoint%>/js/bbtoolkit-combined.js',
        nonull: true
      },
      css: {
        src: ['_src/css/bootstrap.min.css', '_src/css/bbtoolkit.css'],
        dest: '<%=meta.endpoint%>/css/bbtoolkit-combined.css',
        nonull: true
      }

    },
    uglify: {
      dist: {
        files: {
          '<%=meta.endpoint%>/js/bbtoolkit-combined.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    watch: {
      html: {
        files: ['**/*.jade','_src/bbtoolkit.json'],
        tasks: ['jade'],
        options: {
          interrupt: true
        }
      },
      css: {
        files: ['_src/stylus/*.styl'],
        tasks: ['stylus:compile', 'concat:css'],
        options: {
          interrupt: true
        }
      },
      js: {
        files: ['_src/js/*.js'],
        tasks: ['concat:js', 'uglify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'stylus', 'concat', 'uglify']);

};
