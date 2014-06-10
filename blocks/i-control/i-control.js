/**
 * @class i-control
 * @abstract
 * @extends i-block
 */
BEM.DOM.decl({ block: 'i-control', baseBlock: 'i-block' }, /** @lends i-control.prototype */ {

    /**
     * Изменение значения контрола.
     *
     * @event i-control#change
     */

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
            this.__self.each(control, function() {
                this.attr('name', name);
            }, function() {
                this.attr('name', name + '[]');
            });
            return this;
        }

        return this.__self.each(control, function() {
            return this.attr('name');
        });
    },

    /**
     * Получить/установить атрибут значения настоящего контрола
     * или списка контролов.
     *
     * При вызове без аргумента возвращается значение контрола
     * или список значений, если контролов несколько.
     *
     * При вызове с аргументом устанавливается указанное значение
     * атрибуту `value` для всех переданных контролов.
     *
     * @param {*} [value] Значение контрола
     * @param {object} [data] Данные для события `change`
     * @returns {BEM.DOM|string[]|string}
     */
    val: function(value, data) {
        var control = this.getControl();

        if(value) {
            this.__self.each(control, function() {
                this.attr('value', value);
            });
            this.trigger('change', data || {});
            return this;
        }

        return this.__self.each(control, function() {
            return this.attr('value');
        });
    }

}, /** @lends i-control */ {});
