/**
 * Тело документа.
 *
 * @class body
 * @extends i-block
 * @bemaker i-block
 */
BEM.DOM.decl({ block: 'body', baseBlock: 'i-block' }, /** @lends body.prototype */ {

    /**
     * Модификатор `svg` со значением `unsupported`,
     * сообщает об отсутствии поддержки SVG в текущем браузере.
     */

    onSetMod: {
        js: {
            inited: function() {
                if(!this.__self.isSupportSVG()) {
                    this.setMod('svg', 'unsupported');
                }
            }
        }
    }

}, /** @lends body */ {

    /**
     * Флаг поддержки SVG.
     *
     * @type {null|boolean}
     */
    _isSupportSVG: null,

    /**
     * Проверить поддержку SVG.
     *
     * @returns {boolean}
     */
    isSupportSVG: function() {
        if(this._isSupportSVG !== null) {
            return this._isSupportSVG;
        }

        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        this._isSupportSVG = (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
        return this._isSupportSVG;
    }

});
