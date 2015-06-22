describe('textarea.', function() {

    it('Без атрибутов', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea' },
            '<div class="i-bem textarea" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control"></textarea>' +
            '</div>'));
    });

    it('Атрибут name', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea', name: 'details' },
            '<div class="i-bem textarea" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control" name="details"></textarea>' +
            '</div>'));
    });

    it('Атрибут placeholder', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea', placeholder: 'message' },
            '<div class="i-bem textarea" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control" placeholder="message"></textarea>' +
            '</div>'));
    });

    it('Содержимое', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea', content: 'text' },
            '<div class="i-bem textarea" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control">text</textarea>' +
            '</div>'));
    });

    it('Модификатор disabled', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea', mods: { disabled: true }},
            '<div class="i-bem textarea textarea_disabled" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control textarea_disabled__control" disabled></textarea>' +
            '</div>'));
    });

});