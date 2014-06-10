/**
 * @class i-control
 * @abstract
 * @extends i-block
 */
BEM.DOM.decl({ block: 'i-control', baseBlock: 'i-block' }, /** @lends i-control.prototype */ {

    /**
     * Событие изменения значения контрола.
     *
     * @event i-control#change
     */

    /**
     * Булев модификатор disabled.
     *
     * Устанавливает одноимённый атрибут всем контролам блока.
     */

    onSetMod: {

        disabled: {
            '*': function(name, val) {
                this.__self.each(this.getControl(), function() {
                    return this.prop(name, !!val);
                });
            }
        }

    },

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
     * При вызове с аргументом в виде массива атрибут `name` устанавливается
     * последовательно для каждого контрола.
     *
     * @param {string|string[]} [name] Имя или несколько имён контролов
     * @returns {BEM.DOM|string|string[]}
     */
    name: function(name) {
        var control = this.getControl();

        if(name) {
            if(Array.isArray(name)) {
                this.__self.each(control, function() {
                    this.attr('name', name.shift() || '');
                });
                return this;
            }

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
     * При вызове с аргументом в виде массива атрибут `value` устанавливается
     * последовательно для каждого контрола.
     *
     * @param {*|*[]} [value] Значение или несколько значений контролов
     * @param {object} [data] Данные для события `change`
     * @returns {BEM.DOM|string|string[]}
     */
    val: function(value, data) {
        var control = this.getControl();

        if(value) {
            var prevVal = this.val();
            this.__self.each(control, function() {
                this.attr('value', Array.isArray(value) ? value.shift() || '' : value);
            });

            if(!_.isEqual(prevVal, this.val())) {
                this.trigger('change', data || {});
            }

            return this;
        }

        return this.__self.each(control, function() {
            return this.attr('value');
        });
    }

}, /** @lends i-control */ {});
