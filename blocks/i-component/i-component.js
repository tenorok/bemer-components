/**
 * @class i-component
 * @abstract
 * @extends i-block
 */
BEM.DOM.decl({ block: 'i-component', baseBlock: 'i-block' }, /** @lends i-component.prototype */ {

    /**
     * Булев модификатор `focus`.
     *
     * Устанавливается когда блок или вложенный в него узел
     * получает настоящий фокус.
     */

    /**
     * Булев модификатор `disabled`.
     *
     * Устанавливается для заблокированного компонента.
     */

}, /** @lends i-component */ {

    live: function() {
        this
            .liveBindTo('focusin', function() {
                this.setMod('focus');
            })
            .liveBindTo('focusout', function() {
                this.delMod('focus');
            });
    }

});
