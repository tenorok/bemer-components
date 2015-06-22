/**
 * Табы.
 *
 * Одновременно может быть выделен только один таб.
 *
 * @class tabs
 * @extends i-control
 * @bemaker i-control
 */
BEM.DOM.decl({ block: 'tabs', baseBlock: 'i-control' }, /** @lends tabs.prototype */ {

    /**
     * Событие изменения значения табов при выделении другого таба.
     *
     * @event tabs#change
     * @param {string|number|boolean} value Значение выделяемой радиокнопки
     * @param {jQuery} item Выделенный элемент `item`
     */

    /**
     * На элементах `item` возможен булев модификатор `checked`,
     * символизирующий текущий выделенный таб.
     */

    /**
     * Получить/установить значение табов.
     *
     * При получении возвращает значение текущей
     * радиокнопки в состоянии `checked`.
     *
     * При установке переводит состояние `checked` на радиокнопку
     * с указанным значением в атрибуте `value`.
     *
     * @param {string|number|boolean} [value] Значение выделяемой радиокнопки
     * @returns {string|number|BEM.DOM}
     */
    val: function(value) {
        if(!arguments.length) {
            return this.getControl().filter(':checked').val();
        }

        // Таб к выделению.
        var item = this.elem('item').filter(function(index, item) {
            return this.elemParams($(item)).value === value;
        }.bind(this));

        if(item.length) {
            this
                .delMod(this.elem('item', 'checked', true), 'checked')
                .setMod(item, 'checked', true);

            this.getControl().filter('[value="' + value + '"]').prop('checked', true);

            this.emit('change', {
                value: value,
                item: item
            });
        }

        return this;
    },

    /**
     * Сбросить выделение табов.
     *
     * @returns {BEM.DOM}
     */
    reset: function() {
        this.delMod(this.elem('item'), 'checked');
        this.getControl().prop('checked', false);
        return this;
    }

}, /** @lends tabs */ {

    live: function() {
        this.__base.apply(this, arguments);
        this
            .liveUnbindFrom('control', 'change', this._onChange)
            .liveBindTo('control', 'change', function(e) {
                this.val(e.target.value);
            });
    }

});
