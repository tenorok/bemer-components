/**
 * @class i-control
 * @abstract
 * @extends i-block
 */
BEM.DOM.decl({ block: 'i-control', baseBlock: 'i-block' }, /** @lends i-control.prototype */ {

    /**
     * Получить настоящий контрол
     * или список контролов.
     *
     * @returns {jQuery}
     */
    getControl: function() {
        return this.elem('control');
    },

    /**
     * Получить/установить атрибут имени настоящего контрола
     * или списка контролов.
     *
     * При вызове без аргумента возвращается имя контрола
     * или список имён, если контролов несколько.
     *
     * При вызове с аргументом устанавливается указанное значение атрибуту `name` контрола
     * или массив значения, если контролов несколько.
     *
     * @param {string} [name] Имя контрола
     * @returns {BEM.DOM|string[]|string}
     */
    name: function(name) {
        var control = this.getControl();

        if(name) {
            if(control.length > 1) {
                this.getControl().each(function(i, ctrl) {
                    $(ctrl).attr('name', name + '[]');
                });
            } else {
                control.attr('name', name);
            }
            return this;
        }

        if(control.length > 1) {
            var names = [];
            this.getControl().each(function(i, ctrl) {
                names.push($(ctrl).attr('name'));
            });
            return names;
        } else {
            return control.attr('name');
        }
    }

}, /** @lends i-control */ {});
