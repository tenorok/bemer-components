describe('tabs.', function() {

    describe('HTML.', function() {

        describe('tabs.', function() {

            it('Тег', function() {
                assert.equal($(bemer({ block: 'tabs', items: [] }))[0].tagName, 'UL');
            });

        });

        describe('__item.', function() {

            var items = $(bemer({
                block: 'tabs',
                name: 'colors',
                items: [
                    {
                        value: 'red',
                        content: 'красный'
                    },
                    {
                        value: 'blue',
                        content: 'синий',
                        checked: true
                    }
                ]
            })).children('.tabs__item');

            it('Тег', function() {
                assert.equal(items[0].tagName, 'LI');
            });

            describe('_checked', function() {

                it('Наличие модификатора', function() {
                    assert.isTrue(items.eq(1).hasClass('tabs__item_checked'));
                });

            });

            describe('__label.', function() {

                it('Тег', function() {
                    assert.equal(items.children('.tabs__label')[0].tagName, 'LABEL');
                });

                describe('__control.', function() {
                    var control = items.children('.tabs__label').children('.tabs__control');

                    it('Тег', function() {
                        assert.equal(control[0].tagName, 'INPUT');
                    });

                    it('Атрибут type', function() {
                        assert.equal(control.attr('type'), 'radio');
                    });

                    it('Атрибут name', function() {
                        assert.equal(control.attr('name'), 'colors');
                    });

                    it('Атрибут value', function() {
                        assert.equal(control.eq(0).attr('value'), 'red');
                        assert.equal(control.eq(1).attr('value'), 'blue');
                    });

                    it('Атрибут checked', function() {
                        assert.isTrue(control.eq(1).prop('checked'));
                    });

                });

                describe('__text.', function() {
                    var text = items.children('.tabs__label').children('.tabs__text');

                    it('Тег', function() {
                        assert.equal(text[0].tagName, 'SPAN');
                    });

                    it('Содержимое', function() {
                        assert.equal(text.eq(0).text(), 'красный');
                        assert.equal(text.eq(1).text(), 'синий');
                    });

                });

            });

        });

    });

});
