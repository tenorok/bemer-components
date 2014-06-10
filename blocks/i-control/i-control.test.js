describe('i-control.', function() {

    it('Получить контрол', function() {
        var control = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control' }
        }).getControl();

        assert.isTrue(control instanceof jQuery);
        assert.equal(control.length, 1);
    });

    it('Получить примиксованный контрол', function() {
        var control = BEM.blocks['i-control'].create({
            block: 'i-control',
            mix: [{ block: 'i-control', elem: 'control' }]
        }).getControl();

        assert.isTrue(control instanceof jQuery);
        assert.equal(control.length, 1);
    });

    it('Получить имя контрола', function() {
        var name = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control', attrs: { name: 'login' }}
        }).name();

        assert.equal(name, 'login');
    });

    it('Установить имя контрола', function() {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control' }
        }).name('login');

        assert.isTrue(block instanceof BEM.DOM);
        assert.equal(block.elem('control').attr('name'), 'login');
    });

    it('Получить имена нескольких контролов', function() {
        var name = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: [
                { elem: 'control', attrs: { name: 'login' }},
                { elem: 'control', attrs: { name: 'password' }}
            ]
        }).name();

        assert.deepEqual(name, ['login', 'password']);
    });

    it('Установить имена нескольких контролов', function() {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: [
                { elem: 'control' },
                { elem: 'control' }
            ]
        }).name('data');

        assert.isTrue(block instanceof BEM.DOM);
        assert.equal($(block.elem('control')[0]).attr('name'), 'data[]');
        assert.equal($(block.elem('control')[1]).attr('name'), 'data[]');
    });

    it('Получить значение контрола', function() {
        var value = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control', attrs: { value: 'login' }}
        }).val();

        assert.equal(value, 'login');
    });

    it('Установить значение контрола', function() {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control' }
        }).val('login');

        assert.isTrue(block instanceof BEM.DOM);
        assert.equal(block.elem('control').attr('value'), 'login');
    });

    it('Получить значение нескольких контролов', function() {
        var value = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: [
                { elem: 'control', attrs: { value: 'login' }},
                { elem: 'control', attrs: { value: 'password' }}
            ]
        }).val();

        assert.deepEqual(value, ['login', 'password']);
    });

    it('Установить значение нескольких контролов', function() {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: [
                { elem: 'control' },
                { elem: 'control' }
            ]
        }).val('data');

        assert.isTrue(block instanceof BEM.DOM);
        assert.equal($(block.elem('control')[0]).attr('value'), 'data');
        assert.equal($(block.elem('control')[1]).attr('value'), 'data');
    });

    it('Проверить возникновение события change', function(done) {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control' }
        });

        block.on('change', function() {
            assert.equal(this.val(), 'data');
            done();
        });

        block.val('data');
    });

    it('Проверить возникновение события change с дополнительными данными', function(done) {
        var block = BEM.blocks['i-control'].create({
            block: 'i-control',
            content: { elem: 'control' }
        });

        block.on('change', function(e, data) {
            assert.equal(data.target, 'blank');
            done();
        });

        block.val('data', { target: 'blank' });
    });

});
