describe('checkbox.', function() {

    describe('Метод val.', function() {

        it('Получить значение', function() {
            var checkbox = BEM.blocks.checkbox.create();
            assert.equal(checkbox.val(), '');
        });

        it('Установить значение', function() {
            var checkbox = BEM.blocks.checkbox.create();
            assert.equal(checkbox.val('discount').val(), 'discount');
        });

        it('Установить значение контролу', function() {
            var checkbox = BEM.blocks.checkbox.create();
            assert.equal(checkbox.val('discount').val(), 'discount');
            assert.equal(checkbox.elem('control').val(), 'discount');
        });

    });

    describe('Событие change.', function() {

        it('Возникновение события change на выключенном контроле', function(done) {
            var checkbox = BEM.blocks.checkbox.create();

            checkbox.on('change', function() {
                assert.equal(this.val(), '');
                assert.equal(this.getMod('checked'), true);
                done();
            });

            checkbox.setMod('checked');
        });

        it('Возникновение события change на включенном контроле', function(done) {
            var checkbox = BEM.blocks.checkbox.create({
                block: 'checkbox',
                value: 'discount',
                mods: { checked: true }
            });

            checkbox.on('change', function() {
                assert.equal(this.val(), 'discount');
                assert.equal(this.getMod('checked'), '');
                done();
            });

            checkbox.delMod('checked');
        });

    });

});
