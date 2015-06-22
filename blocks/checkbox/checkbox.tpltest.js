describe('checkbox.', function() {

    it('Без атрибутов', function() {
        assert.isTrue(htmlDiffer({ block: 'checkbox' },
            '<label class="checkbox i-bem" data-bem="{&quot;checkbox&quot;:{}}">' +
                '<input class="checkbox__control" type="checkbox" value="">' +
                '<div class="checkbox__pseudo"></div>' +
            '</label>'));
    });

    it('Атрибут name', function() {
        assert.isTrue(htmlDiffer({ block: 'checkbox', name: 'discount' },
            '<label class="checkbox i-bem" data-bem="{&quot;checkbox&quot;:{}}">' +
                '<input class="checkbox__control" type="checkbox"  value="" name="discount">' +
                '<div class="checkbox__pseudo"></div>' +
            '</label>'));
    });

    it('Атрибут value', function() {
        assert.isTrue(htmlDiffer({ block: 'checkbox', value: 'accept' },
            '<label class="checkbox i-bem" data-bem="{&quot;checkbox&quot;:{}}">' +
                '<input class="checkbox__control" type="checkbox" value="accept">' +
                '<div class="checkbox__pseudo"></div>' +
            '</label>'));
    });

    it('Модификатор checked', function() {
        assert.isTrue(htmlDiffer({ block: 'checkbox', mods: { checked: true }},
            '<label class="checkbox checkbox_checked i-bem" data-bem="{&quot;checkbox&quot;:{}}">' +
                '<input class="checkbox__control checkbox_checked__control" type="checkbox" value="" checked>' +
                '<div class="checkbox__pseudo checkbox_checked__pseudo"></div>' +
            '</label>'));
    });

    it('Модификатор disabled', function() {
        assert.isTrue(htmlDiffer({ block: 'checkbox', mods: { disabled: true }},
            '<label class="checkbox checkbox_disabled i-bem" data-bem="{&quot;checkbox&quot;:{}}">' +
                '<input class="checkbox__control checkbox_disabled__control" type="checkbox" value="" disabled>' +
                '<div class="checkbox__pseudo checkbox_disabled__pseudo"></div>' +
            '</label>'));
    });

});
