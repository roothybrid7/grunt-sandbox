/*! grunt-sandbox - v0.0.0 - 2012-04-03
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

$(function() {
  var bgColor = Math.floor(Math.random() * 0xffffff).toString(16);
  var color = (parseInt(bgColor, 16) ^ 0xffffff).toString(16);
  var message = '0-testscript.js が組み込まれた模様!!';

  $('<div>' + message + '</div>').appendTo('#main')
    .css({backgroundColor: '#' + bgColor})
    .css({color: '#' + color});
});
