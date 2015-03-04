describe('textarea.', function() {

    describe('Событие change.', function() {

        it('Возникновение события change', function(done) {
            var textarea = BEM.blocks.textarea.create();

            textarea.on('change', function() {
                assert.equal(textarea.val(), 'data');
                done();
            });

            textarea.val('data');
        });

    });

});
