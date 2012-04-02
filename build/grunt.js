/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:../package.json>',
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
        '../js/snip/**/*.js'
      ]
    },
    concat: {
      dist: {
        src: [
          '<banner>',
          '<file_strip_banner:../js/snip/0-testscript.js>',
          '<file_strip_banner:../js/snip/1-testscript.js>',
          '<file_strip_banner:../js/snip/2-testscript.js>',
          '<file_strip_banner:../js/snip/3-testscript.js>',
          '<file_strip_banner:../js/snip/4-testscript.js>',
          '<file_strip_banner:../js/snip/5-testscript.js>',
          '<file_strip_banner:../js/snip/6-testscript.js>',
          '<file_strip_banner:../js/snip/7-testscript.js>',
          '<file_strip_banner:../js/snip/8-testscript.js>',
          '<file_strip_banner:../js/snip/9-testscript.js>',
          '<file_strip_banner:../js/snip/10-testscript.js>',
          '<file_strip_banner:../js/snip/11-testscript.js>',
          '<file_strip_banner:../js/snip/12-testscript.js>',
          '<file_strip_banner:../js/snip/13-testscript.js>',
          '<file_strip_banner:../js/snip/14-testscript.js>',
          '<file_strip_banner:../js/snip/15-testscript.js>',
          '<file_strip_banner:../js/snip/16-testscript.js>',
          '<file_strip_banner:../js/snip/17-testscript.js>',
          '<file_strip_banner:../js/snip/18-testscript.js>',
          '<file_strip_banner:../js/snip/19-testscript.js>',
          '<file_strip_banner:../js/snip/20-testscript.js>',
          '<file_strip_banner:../js/snip/21-testscript.js>',
          '<file_strip_banner:../js/snip/22-testscript.js>',
          '<file_strip_banner:../js/snip/23-testscript.js>',
          '<file_strip_banner:../js/snip/24-testscript.js>',
          '<file_strip_banner:../js/snip/25-testscript.js>',
          '<file_strip_banner:../js/snip/26-testscript.js>',
          '<file_strip_banner:../js/snip/27-testscript.js>',
          '<file_strip_banner:../js/snip/28-testscript.js>',
          '<file_strip_banner:../js/snip/29-testscript.js>',
          '<file_strip_banner:../js/snip/30-testscript.js>',
          '<file_strip_banner:../js/snip/31-testscript.js>',
          '<file_strip_banner:../js/snip/32-testscript.js>',
          '<file_strip_banner:../js/snip/33-testscript.js>',
          '<file_strip_banner:../js/snip/34-testscript.js>',
          '<file_strip_banner:../js/snip/35-testscript.js>',
          '<file_strip_banner:../js/snip/36-testscript.js>',
          '<file_strip_banner:../js/snip/37-testscript.js>',
          '<file_strip_banner:../js/snip/38-testscript.js>',
          '<file_strip_banner:../js/snip/39-testscript.js>',
          '<file_strip_banner:../js/snip/40-testscript.js>',
          '<file_strip_banner:../js/snip/41-testscript.js>',
          '<file_strip_banner:../js/snip/42-testscript.js>',
          '<file_strip_banner:../js/snip/43-testscript.js>',
          '<file_strip_banner:../js/snip/44-testscript.js>',
          '<file_strip_banner:../js/snip/45-testscript.js>',
          '<file_strip_banner:../js/snip/46-testscript.js>',
          '<file_strip_banner:../js/snip/47-testscript.js>',
          '<file_strip_banner:../js/snip/48-testscript.js>',
          '<file_strip_banner:../js/snip/49-testscript.js>',
          '<file_strip_banner:../js/snip/50-testscript.js>',
          '<file_strip_banner:../js/snip/51-testscript.js>',
          '<file_strip_banner:../js/snip/52-testscript.js>',
          '<file_strip_banner:../js/snip/53-testscript.js>',
          '<file_strip_banner:../js/snip/54-testscript.js>',
          '<file_strip_banner:../js/snip/55-testscript.js>',
          '<file_strip_banner:../js/snip/56-testscript.js>',
          '<file_strip_banner:../js/snip/57-testscript.js>',
          '<file_strip_banner:../js/snip/58-testscript.js>',
          '<file_strip_banner:../js/snip/59-testscript.js>',
          '<file_strip_banner:../js/snip/60-testscript.js>',
          '<file_strip_banner:../js/snip/61-testscript.js>',
          '<file_strip_banner:../js/snip/62-testscript.js>',
          '<file_strip_banner:../js/snip/63-testscript.js>',
          '<file_strip_banner:../js/snip/64-testscript.js>',
          '<file_strip_banner:../js/snip/65-testscript.js>',
          '<file_strip_banner:../js/snip/66-testscript.js>',
          '<file_strip_banner:../js/snip/67-testscript.js>',
          '<file_strip_banner:../js/snip/68-testscript.js>',
          '<file_strip_banner:../js/snip/69-testscript.js>',
          '<file_strip_banner:../js/snip/70-testscript.js>',
          '<file_strip_banner:../js/snip/71-testscript.js>',
          '<file_strip_banner:../js/snip/72-testscript.js>',
          '<file_strip_banner:../js/snip/73-testscript.js>',
          '<file_strip_banner:../js/snip/74-testscript.js>',
          '<file_strip_banner:../js/snip/75-testscript.js>',
          '<file_strip_banner:../js/snip/76-testscript.js>',
          '<file_strip_banner:../js/snip/77-testscript.js>',
          '<file_strip_banner:../js/snip/78-testscript.js>',
          '<file_strip_banner:../js/snip/79-testscript.js>',
          '<file_strip_banner:../js/snip/80-testscript.js>',
          '<file_strip_banner:../js/snip/81-testscript.js>',
          '<file_strip_banner:../js/snip/82-testscript.js>',
          '<file_strip_banner:../js/snip/83-testscript.js>',
          '<file_strip_banner:../js/snip/84-testscript.js>',
          '<file_strip_banner:../js/snip/85-testscript.js>',
          '<file_strip_banner:../js/snip/86-testscript.js>',
          '<file_strip_banner:../js/snip/87-testscript.js>',
          '<file_strip_banner:../js/snip/88-testscript.js>',
          '<file_strip_banner:../js/snip/89-testscript.js>',
          '<file_strip_banner:../js/snip/90-testscript.js>',
          '<file_strip_banner:../js/snip/91-testscript.js>',
          '<file_strip_banner:../js/snip/92-testscript.js>',
          '<file_strip_banner:../js/snip/93-testscript.js>',
          '<file_strip_banner:../js/snip/94-testscript.js>',
          '<file_strip_banner:../js/snip/95-testscript.js>',
          '<file_strip_banner:../js/snip/96-testscript.js>',
          '<file_strip_banner:../js/snip/97-testscript.js>',
          '<file_strip_banner:../js/snip/98-testscript.js>',
          '<file_strip_banner:../js/snip/99-testscript.js>'
        ],
        dest: '../dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner>', '<config:concat.dist.dest>'],
        dest: '../dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
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

};
