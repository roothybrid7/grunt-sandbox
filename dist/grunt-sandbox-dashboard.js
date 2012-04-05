/*! grunt-sandbox - v0.0.0 - 2012-04-05
* Copyright (c) 2012 function () {

// If the string looks like an identifier, then we can return it as is.
// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can simply slap some quotes around it.
// Otherwise we must also replace the offending characters with safe
// sequences.

            if (ix.test(this)) {
                return this;
            }
            if (nx.test(this)) {
                return '"' + this.replace(nxg, function (a) {
                    var c = escapes[a];
                    if (c) {
                        return c;
                    }
                    return '\\u' + ('0000' + a.charCodeAt().toString(16)).slice(-4);
                }) + '"';
            }
            return '"' + this + '"';
        }; Licensed  */

/**
 * 3-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '3-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 4-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '4-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 5-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '5-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 6-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '6-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 7-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '7-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 8-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '8-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});

/**
 * 9-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '9-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});
