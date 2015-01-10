describe('tabs.', function() {

    describe('HTML.', function() {

        describe('tabs.', function() {

            it('Тег', function() {
                assert.equal($(bemer({ block: 'tabs', items: [] }))[0].tagName, 'UL');
            });

        });

        describe('__item.', function() {

            var item = $(bemer({
                block: 'tabs',
                name: 'colors',
                items: [
                    {
                        value: 'red',
                        content: 'красный'
                    },
                    {
                        value: 'blue',
                        content: 'синий'
                    }
                ]
            })).children('.tabs__item');

            it('Тег', function() {
                assert.equal(item[0].tagName, 'LI');
            });

            describe('__label.', function() {

                it('Тег', function() {
                    assert.equal(item.children('.tabs__label')[0].tagName, 'LABEL');
                });

                describe('__control.', function() {
                    var control = item.children('.tabs__label').children('.tabs__control');

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

                });

                describe('__text.', function() {
                    var text = item.children('.tabs__label').children('.tabs__text');

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
