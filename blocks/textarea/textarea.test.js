describe('Блок textarea.', function() {

    describe('Bemer.', function() {

        it('Блок', function() {
            assert.equal(
                bemer({ block: 'textarea' }),
                bemerTest({ block: 'textarea', tag: 'textarea' })
            );
        });

        it('Placeholder', function() {
            assert.equal(
                bemer({ block: 'textarea', placeholder: 'Message' }),
                bemerTest({ block: 'textarea', tag: 'textarea', attrs: { placeholder: 'Message' }})
            );
        });

    });

});
