/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: [
        'grunt.js',
        'js/snip/**/*.js'
      ]
    },
    concat: {
      about: {
        src: [
          '<banner>',
          '<file_strip_banner:js/snip/0-testscript.js>'
        ],
        dest: 'dist/<%= pkg.name %>-about.js'
      },
      config: {
        src: [
          '<banner>',
          'js/snip/1-testscript.js',
          'js/snip/2-testscript.js'
        ],
        dest: 'dist/<%= pkg.name %>-config.js'
      },
      dashboard: {
        src: [
          '<banner>',
          'js/snip/3-testscript.js',
          'js/snip/4-testscript.js',
          'js/snip/5-testscript.js',
          'js/snip/6-testscript.js',
          'js/snip/7-testscript.js',
          'js/snip/8-testscript.js',
          'js/snip/9-testscript.js'
        ],
        dest: 'dist/<%= pkg.name %>-dashboard.js'
      },
      dist: {
        src: [
          '<banner>',
          'js/snip/**/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      about: {
        src: ['<banner>', '<config:concat.about.dest>'],
        dest: 'dist/<%= pkg.name %>-about.min.js'
      },
      config: {
        src: ['<banner>', '<config:concat.config.dest>'],
        dest: 'dist/<%= pkg.name %>-config.min.js'
      },
      dashboard: {
        src: ['<banner>', '<config:concat.dashboard.dest>'],
        dest: 'dist/<%= pkg.name %>-dashboard.min.js'
      },
      dist: {
        src: ['<banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'concat min');

  /**
   * Returns the rest of the elements in an array.
   *
   * @param {number} index The values of the array that index onward.
   * @return {Array} Array.
   */
  grunt.registerHelper('rest', function(arr, index) {
    if (typeof index !== 'number') {
      index = 1;
    }
    return arr.slice(index);
  });

  /**
   * Compare function.
   *
   * @param {*} a A compared value1.
   * @param {*} b A compared value2.
   * @return {number} The compare result.
   */
  grunt.registerHelper('sort_filename', function(a, b, condition) {
    grunt.log.writeln(this.name, this.nameArgs);

    var numA = parseInt(a, 10);
    var numB = parseInt(b, 10);

    return numA - numB;
  });
};
