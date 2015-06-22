/**
 * @class checkbox
 * @extends i-control
 * @bemaker i-control
 */
BEM.DOM.decl({ block: 'checkbox', baseBlock: 'i-control' }, /** @lends checkbox.prototype */ {

    beforeSetMod: {

        checked: {
            'true': function() {
                return !this.hasMod('disabled');
            }
        }

    },

    onSetMod: {

        checked: {
            '*': function() {
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
        this
            .liveBindTo('control', 'change', function(e, data) {
                e.target.checked ? this.setMod('checked') : this.delMod('checked');
                this.emit(e.type, data);
            });
    }

});
