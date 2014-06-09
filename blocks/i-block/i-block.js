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
    }

});
