/**
 * @class i-block
 * @abstract
 */
BEM.DOM.decl('i-block', /** @lends i-block.prototype */ {}, /** @lends i-block */ {

    /**
     * Возвращает BEMJSON блока.
     *
     * @returns {object}
     */
    getBEMJSON: function() {
        return { block: this.getName() };
    },

    /**
     * Получить экземпляр блока.
     *
     * @param {object} [bemjson] BEMJSON
     * @returns {BEM.DOM}
     */
    create: function(bemjson) {
        var bemjson = bemjson || this.getBEMJSON.apply(this, arguments),
            block = BEM.DOM.init($(bemer(bemjson)));

        return bemjson.js === false ? block : block.bem(this.getName());
    },

    /**
     * Колбек вызывается для одного или нескольких элементов
     * при получении информации о DOM-элементах.
     *
     * @callback i-block~getSingleCallback
     * @this jQuery
     * @param {jQuery} elem Элемент
     * @param {number} index Индекс элемента
     */

    /**
     * Колбек вызывается для нескольких элементов
     * при получении информации о DOM-элементах.
     *
     * @callback i-block~getMultiCallback
     * @this jQuery
     * @param {jQuery} elem Элемент
     * @param {number} index Индекс элемента
     */

    /**
     * Получить информацию по одному или нескольким DOM-элементам.
     *
     * При одинаковом получении информации для одного и нескольких элементов
     * достаточно передать только один обработчик.
     *
     * При необходимости различного получения информации для одного и нескольких
     * элементов можно передать дваразных обработчика.
     *
     * @param {jQuery} domElem Один или несколько DOM-элементов
     * @param {i-block~getSingleCallback} singleCallback Обработчик одного или нескольких элемента
     * @param {i-block~getMultiCallback} [multiCallback] Обработчик нескольких элементов
     * @returns {array|*} При получении информации о нескольких элементах возвращается массив
     */
    get: function(domElem, singleCallback, multiCallback) {
        if(domElem.length > 1) {
            var result = [],
                callback = multiCallback || singleCallback;

            domElem.each(function(index, elem) {
                var $elem = $(elem);
                result.push(callback.call($elem, $elem, index));
            });
            return result;
        } else {
            return singleCallback.call(domElem, domElem, 0);
        }
    }

});
