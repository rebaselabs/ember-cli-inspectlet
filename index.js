/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-inspectlet',

  contentFor: function(type, config) {
    const wid = config.APP.INSPECTLET_WID;
    const js_server = config.APP.INSPECTLET_JS_SERVER ? config.APP.INSPECTLET_JS_SERVER : 'cdn.inspectlet.com';
    const js_uri = config.APP.INSPECTLET_JS_URI ? config.APP.INSPECTLET_JS_URI : 'inspectlet.js';

    if (wid != null && type === 'head') {
      return "<script type='text/javascript' id='inspectletjs'>\n" +
        "window.__insp = window.__insp || [];\n" +
        "__insp.push(['wid', " + wid + "]);\n" +
        "(function() {\n" +
        "function ldinsp(){if(typeof window.__inspld != 'undefined') return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = 'inspsync'; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://" + js_server + "/" + js_uri + "'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };\n" +
        " setTimeout(ldinsp, 500); document.readyState != 'complete' ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();\n" +
        "})();" +
        "</script>"
    }
  }
};
