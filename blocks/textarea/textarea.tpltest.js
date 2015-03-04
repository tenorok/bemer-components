describe('textarea.', function() {

    it('Блок без полей', function() {
        assert.isTrue(htmlDiffer({ block: 'textarea' },
            '<div class="i-bem textarea" data-bem="{&quot;textarea&quot;:{}}">' +
                '<textarea class="textarea__control"></textarea>' +
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

});
