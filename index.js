/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-inspectlet',

  contentFor: function(type, config) {
    var wid = config.APP.INSPECTLET_WID;

    if (wid != null && type === 'head') {
      return "<script>\n" +
             "window.__insp = window.__insp || [];\n" +
             "__insp.push(['wid', " + wid + "]);\n" +
             "(function() {\n" +
             "  function __ldinsp(){var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = 'inspsync'; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); }\n" +
             "  if (window.attachEvent){" +
             "    window.attachEvent('onload', __ldinsp);" +
             "  }else{" +
             "    window.addEventListener('load', __ldinsp, false);" +
             "  }" +
             "})();" +
             "</script>"
    }
  }
};
