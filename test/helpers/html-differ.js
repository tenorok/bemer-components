var HtmlDiffer = require('html-differ').HtmlDiffer,
    htmlDifferlogger = require('html-differ/lib/logger');

/**
 * Сравнить HTML.
 *
 * Функция преобразует BEMJSON в HTML с помощью bemer и выводит ошибку,
 * если полученный результат не проходит проверку htmlDiffer.
 *
 * @param {object} bemjson BEMJSON для преобразования в HTML
 * @param {string} htmlStandard Эталонный HTML
 * @param {object} [options=bem] Опции для htmlDiffer
 * @returns {boolean} Результат проверки htmlDiffer
 */
global.htmlDiffer = function(bemjson, htmlStandard, options) {
    var html = bemer(bemjson),
        htmlDiffer = new HtmlDiffer(options || 'bem'),
        diff = htmlDiffer.isEqual(html, htmlStandard);

    if(!diff) {
        htmlDifferlogger.logDiffText(htmlDiffer.diffHtml(html, htmlStandard));
    }

    return diff;
};
