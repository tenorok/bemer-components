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

        it('Установка модификатора checked', function(done) {
            checkbox.on('change', function() {
                assert.isTrue(this.elem('control').is(':checked'));
                assert.isTrue(this.getMod('checked'));
                done();
            });
            checkbox.setMod('checked');
        });

        it('Удаление модификатора checked', function(done) {
            precheckedCheckbox.on('change', function() {
                assert.isFalse(this.elem('control').is(':checked'));
                assert.isFalse(this.hasMod('checked'));
                done();
            });
            precheckedCheckbox.delMod('checked');
        });

        it('Клик по выключенному контролу', function(done) {
            checkbox.on('change', function() {
                assert.isTrue(this.getMod('checked'));
                done();
            });
            simulant.fire(checkbox.elem('control')[0], 'click');
        });

        it('Клик по включенному контролу', function(done) {
            precheckedCheckbox.on('change', function() {
                assert.isFalse(this.hasMod('checked'));
                done();
            });
            simulant.fire(precheckedCheckbox.elem('control')[0], 'click');
        });

    });

});
