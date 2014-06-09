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
     * @returns {BEM.DOM}
     */
    create: function() {
        return BEM.DOM.init($(bemer(this.getBEMJSON.apply(this, arguments)))).bem(this.getName());
    }

});
