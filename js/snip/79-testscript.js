/**
 * 79-testscript.js - grunt test script.
 */

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '79-testscript.js が読み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});
