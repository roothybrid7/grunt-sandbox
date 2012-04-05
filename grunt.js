/*global module:false*/
module.exports = function(grunt) {
  var utils = grunt.utils
    , task = grunt.task
    , helper = grunt.helper
    , file = grunt.file
    , config = grunt.config
    , log = grunt.log
    , os = require('os').platform();

  /**
   * Compare function.
   *
   * @param {*} a A comparable value1.
   * @param {*} b A comparable value2.
   * @return {number} The compare result.
   */
  var compareFilename = function(a, b) {
    var numA = parseInt(a, 10), numB = parseInt(b, 10);
    return numA - numB;
  };

  /**
   * Returns the rest of the elements in an array.
   *
   * @param {Array} arr A source array.
   * @param {number=} index The values of the array that index onward.
   * @return {Array} The rest array.
   */
  grunt.registerHelper('rest', function(arr, index) {
    if (utils.kindOf(index) !== 'number') {
      index = 1;
    }
    return arr.slice(index);
  });

  /**
   * Returns basename.
   *
   * @param {string} filepath A file path string.
   * @param {string=} suffix A remove suffix.
   * @return {string} basename string.
   */
  grunt.registerHelper('basename', function(filepath, suffix) {
    var base = ''
      , separator = os.match(/^win/) ? '\\' : '/';

    if (filepath === '.' || filepath === separator) {
      base = filepath;
    } else {
      var entries = filepath && filepath.split(separator);
      while (entries.length) {
        if ((base = entries.pop())) break;
      }
    }

    if (utils.kindOf(suffix) === 'string' && suffix.length > 0) {
      base = base.replace(suffix, '');
    }

    return base;
  });

  /**
   * Returns sorted filelist.
   *
   * @param {string} patterns A file path wildcard.
   * @return {string} sorted filelist.
   */
  grunt.registerHelper('sort_files', function(patterns) {
    var files = file.expandFiles(patterns);

    return sortedFiles = utils._.sortBy(files, function(file) {
      var basename = helper('basename', file);
      return parseInt(basename, 10);
    });
  });

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
          helper('sort_files', 'js/snip/**/*.js')
        ],
        dest: 'dist/<%= pkg.name %>.js'
      },
      distStrip: {
        src: [
          '<banner>',
          utils._.map(helper('sort_files', 'js/snip/**/*.js'), function(file) {
            return '<file_strip_banner:' + file + '>';
          })
        ],
        dest: 'dist/<%= pkg.name %>-strip.js'
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

  grunt.registerTask('sort_files_with_printout_test', 'print out sort files.', function() {
    log.writeln(this.name + ', ' + this.nameArgs);
    var sortedFiles = helper('sort_files', 'js/snip/**/*.js');
    log.writeln(helper('concat', sortedFiles));
  });
};
