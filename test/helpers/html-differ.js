var HtmlDiffer = require('html-differ').HtmlDiffer,
    htmlDifferlogger = require('html-differ/lib/logger'),
    htmlDiffer = new HtmlDiffer('bem');

global.htmlDiffer = function(bemjson, htmlStandard) {
    var html = bemer(bemjson),
        diff = htmlDiffer.isEqual(html, htmlStandard);

    if(!diff) {
        htmlDifferlogger.logDiffText(htmlDiffer.diffHtml(html, htmlStandard));
    }

    return diff;
};
