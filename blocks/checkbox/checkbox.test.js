describe('checkbox.', function() {

    var checkbox,
        precheckedCheckbox;

    beforeEach(function() {
        checkbox = BEM.DOM.append(
            BEM.DOM.scope,
            bemer({ block: 'checkbox' })
        ).bem('checkbox');

        precheckedCheckbox = BEM.DOM.append(
            BEM.DOM.scope,
            bemer({ block: 'checkbox', mods: { checked: true }})
        ).bem('checkbox');
    });

    afterEach(function() {
        BEM.DOM.destruct(checkbox.domElem);
        BEM.DOM.destruct(precheckedCheckbox.domElem);
    });

    describe('Метод val.', function() {

        it('Получить значение', function() {
            assert.equal(checkbox.val(), '');
        });

        it('Установить значение', function() {
            assert.equal(checkbox.val('discount').val(), 'discount');
        });

        it('Установить значение контролу', function() {
            assert.equal(checkbox.val('discount').val(), 'discount');
            assert.equal(checkbox.elem('control').val(), 'discount');
        });

    });

    describe('Событие change.', function() {

        it('Возникновение события change на выключенном контроле', function(done) {
            checkbox.on('change', function() {
                assert.equal(this.val(), '');
                assert.isTrue(this.getMod('checked'));
                done();
            });
            checkbox.setMod('checked');
        });

        it('Возникновение события change на включенном контроле', function(done) {
            precheckedCheckbox.on('change', function() {
                assert.isFalse(this.hasMod('checked'));
                done();
            });
            precheckedCheckbox.delMod('checked');
        });

        it('Установка модификатора checked при включении контрола', function(done) {
            checkbox.on('change', function() {
                assert.isTrue(this.getMod('checked'));
                done();
            });
            simulant.fire(checkbox.elem('control')[0], 'click');
        });

        it('Снятие модификатора checked при выключении контрола', function(done) {
            precheckedCheckbox.on('change', function() {
                assert.isFalse(this.hasMod('checked'));
                done();
            });
            simulant.fire(precheckedCheckbox.elem('control')[0], 'click');
        });

    });

});
