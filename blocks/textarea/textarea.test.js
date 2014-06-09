describe('Блок textarea.', function() {

    describe('HTML.', function() {

        it('Тег', function() {
            assert.equal($(bemer({ block: 'textarea' }))[0].tagName, 'TEXTAREA');
        });

        it('Placeholder', function() {
            assert.equal($(bemer({ block: 'textarea', placeholder: 'message' })).attr('placeholder'), 'message');
        });

    });

});
