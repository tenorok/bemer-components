describe('Блок textarea.', function() {

    describe('Bemer.', function() {

        it('Блок', function() {
            assert.equal(
                bemer({ block: 'textarea' }),
                '<textarea class="textarea i-bem" data-bem="{&quot;textarea&quot;:{}}"></textarea>'
            );
        });

    });

});
