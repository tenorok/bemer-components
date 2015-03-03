describe('link.', function() {

    it('Блок без полей', function() {
        assert.isTrue(htmlDiffer({ block: 'link' },
            '<a class="link" href="#"></a>'));
    });

    it('Атрибут href', function() {
        assert.isTrue(htmlDiffer({ block: 'link', href: '//example.com' },
            '<a class="link" href="//example.com"></a>'));
    });

    it('Атрибут target', function() {
        assert.isTrue(htmlDiffer({ block: 'link', target: 'blank' },
            '<a class="link" href="#" target="_blank"></a>'));
    });

    it('Содержимое', function() {
        assert.isTrue(htmlDiffer({ block: 'link', content: 'text' },
            '<a class="link" href="#">text</a>'));
    });

});
