/**
 * @class checkbox
 * @extends i-control
 * @bemaker i-control
 */
BEM.DOM.decl({ block: 'checkbox', baseBlock: 'i-control' }, /** @lends checkbox.prototype */ {

    /**
     * Булев модификатор `checked`.
     *
     * Устанавливает одноимённый атрибут контролу блока.
     */

    beforeSetMod: {

        checked: {
            'true': function() {
                return !this.hasMod('disabled');
            }
        }

    },

    onSetMod: {

        checked: {
            '*': function(name, val) {
                this.elem('control').prop(name, val);
                this.emit('change');
            }
        }

    },

    /**
     * Получить/установить значение настоящему контролу.
     *
     * При вызове без аргумента возвращается значение контрола.
     *
     * При вызове с аргументом устанавливается указанное
     * значение для контрола.
     *
     * @override
     * @param {*} [value] Значение или несколько значений контролов
     * @returns {BEM.DOM|string}
     */
    val: function(value) {
        var control = this.getControl();

        if(value) {
            control.val(value);
            return this;
        }

        return control.val();
    }

}, /** @lends checkbox */ {

    live: function() {
        this.__base.apply(this, arguments);
        this
            .liveUnbindFrom('control', 'change', this._onChange)
            .liveBindTo('control', 'change', function(e) {
                e.target.checked ? this.setMod('checked') : this.delMod('checked');
            });
    }

});
