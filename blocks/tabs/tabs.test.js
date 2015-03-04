describe('tabs.', function() {

    var tabs,
        precheckedTabs;

    beforeEach(function() {
        tabs = BEM.DOM.append(BEM.DOM.scope, bemer({
            block: 'tabs',
            items: [
                { value: 'circle', content: 'круг' },
                { value: 'square', content: 'квадрат' }
            ]
        })).bem('tabs');

        precheckedTabs = BEM.DOM.append(BEM.DOM.scope, bemer({
            block: 'tabs',
            name: 'shapes',
            items: [
                { value: 'circle', content: 'круг' },
                { value: 'square', content: 'квадрат', checked: true }
            ]
        })).bem('tabs');
    });

    afterEach(function() {
        BEM.DOM.destruct(tabs.domElem);
        BEM.DOM.destruct(precheckedTabs.domElem);
    });

    describe('HTML.', function() {

        it('Атрибуты name обоих табов должны быть идентичны', function() {
            var control = tabs.elem('control');
            assert.equal(control.eq(0).attr('name'), control.eq(1).attr('name'));
        });

    });

    describe('Метод val.', function() {

        it('Получить значение табов', function() {
            assert.isUndefined(tabs.val());
            assert.equal(precheckedTabs.val(), 'square');
        });

        it('Установить несуществующее значение', function() {
            assert.isUndefined(tabs.val('foo').val());
            assert.isFalse(tabs.elem('item').eq(0).hasClass('tabs__item_checked'));
            assert.isFalse(tabs.elem('item').eq(1).hasClass('tabs__item_checked'));
        });

        it('Установить значение табам', function() {
            assert.equal(tabs.val('circle').val(), 'circle');
            assert.isTrue(tabs.elem('item').eq(0).hasClass('tabs__item_checked'));
            assert.isFalse(tabs.elem('item').eq(1).hasClass('tabs__item_checked'));
        });

        it('Изменить значение предустановленных табов', function() {
            assert.equal(precheckedTabs.val('circle').val(), 'circle');
            assert.isTrue(precheckedTabs.elem('item').eq(0).hasClass('tabs__item_checked'));
            assert.isFalse(precheckedTabs.elem('item').eq(1).hasClass('tabs__item_checked'));
        });

    });

    describe('Метод reset.', function() {

        it('Сброс выделенных табов', function() {
            assert.equal(precheckedTabs.val(), 'square');
            assert.deepEqual(precheckedTabs.reset(), precheckedTabs);
            assert.isUndefined(precheckedTabs.val());

            var control = precheckedTabs.elem('control');
            assert.isUndefined(control.attr('checked'));
            assert.isFalse(control.prop('checked'));

            assert.isFalse(precheckedTabs.elem('item').hasClass('tabs__item_checked'));
        });

    });

    describe('Событие change.', function() {

        it('При установке несуществующего значения событие не должно возникать', function(done) {
            tabs.on('change', function() {
                throw new Error('Event change should not be triggered.');
            });

            tabs.val('foo');
            setTimeout(done, 10);
        });

        it('Инициирование события change методом val', function(done) {
            tabs.on('change', function(e, data) {
                assert.deepEqual(data, {
                    value: 'square',
                    item: tabs.elem('item').eq(1)
                });
                done();
            });

            tabs.val('square');
        });

        it('Инициирование события change кликом мыши', function(done) {
            tabs.on('change', function(e, data) {
                var item = tabs.elem('item').eq(0);

                assert.deepEqual(data, {
                    value: 'circle',
                    item: item
                });
                assert.equal(tabs.val(), 'circle');
                assert.isTrue(item.hasClass('tabs__item_checked'));
                done();
            });

            simulant.fire(tabs.elem('label').eq(0)[0], 'click');
        });

    });

});
