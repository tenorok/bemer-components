describe('tabs.', function() {

    it('Без атрибутов и элементов', function() {
        assert.isTrue(htmlDiffer({ block: 'tabs', items: [] },
            '<ul class="tabs"></ul>'));
    });

    it('Без атрибутов и с двумя элементами', function() {
        assert.isTrue(htmlDiffer({
                block: 'tabs',
                items: [
                    { content: 'первый' },
                    { content: 'второй' }
                ]
            },
            '<ul class="tabs">' +
                '<li class="i-bem tabs__item" data-bem="{&quot;tabs__item&quot;:{}}">' +
                    '<label class="tabs__label">' +
                        '<input class="tabs__control" type="radio" name="uniq">' +
                        '<span class="tabs__text">первый</span>' +
                    '</label>' +
                '</li>' +
                '<li class="i-bem tabs__item" data-bem="{&quot;tabs__item&quot;:{}}">' +
                    '<label class="tabs__label">' +
                        '<input class="tabs__control" type="radio" name="uniq">' +
                        '<span class="tabs__text">второй</span>' +
                    '</label>' +
                '</li>' +
            '</ul>',
            { ignoreAttributes: ['name'] }));
    });

    it('С атрибутом name и двумя элементами с содержимым, один из которых активен', function() {
        assert.isTrue(htmlDiffer({
                block: 'tabs',
                name: 'colors',
                items: [
                    { value: 'red', content: 'красный' },
                    { value: 'blue', content: 'синий', checked: true }
                ]
            },
            '<ul class="tabs">' +
                '<li class="i-bem tabs__item" ' +
                    'data-bem="{&quot;tabs__item&quot;:{&quot;value&quot;:&quot;red&quot;}}">' +
                    '<label class="tabs__label">' +
                        '<input class="tabs__control" type="radio" name="colors" value="red">' +
                        '<span class="tabs__text">красный</span>' +
                    '</label>' +
                '</li>' +
                '<li class="i-bem tabs__item tabs__item_checked" ' +
                    'data-bem="{&quot;tabs__item&quot;:{&quot;value&quot;:&quot;blue&quot;}}">' +
                    '<label class="tabs__label">' +
                        '<input class="tabs__control" type="radio" name="colors" value="blue" checked>' +
                        '<span class="tabs__text">синий</span>' +
                    '</label>' +
                '</li>' +
            '</ul>'));
    });

});
