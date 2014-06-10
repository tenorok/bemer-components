describe('i-block.', function() {

    it('Получить BEMJSON', function() {
        assert.deepEqual(BEM.blocks['i-block'].getBEMJSON(), { block: 'i-block' });
    });

    it('Получить экземпляр блока', function() {
        assert.isTrue(BEM.blocks['i-block'].create() instanceof BEM.DOM);
    });

    it('Получить экземпляр блока без инициализации из нестандартного BEMJSON', function() {
        var block = BEM.blocks['i-block'].create({ block: 'i-block', js: false });
        assert.isTrue(block instanceof jQuery);
        assert.isFalse(block.hasClass('i-bem'));
    });

    it('Получить атрибут type одного тега', function() {
        var block = BEM.blocks['i-block'].create({
            block: 'i-block',
            content: { elem: 'input', attrs: { type: 'text' }}
        });

        assert.equal(BEM.blocks['i-block'].each(block.elem('input'), function(input) {
            return this.attr('type');
        }), 'text');
    });

    it('Получить атрибуты type нескольких тегов', function() {
        var block = BEM.blocks['i-block'].create({
            block: 'i-block',
            content: [
                { elem: 'input', attrs: { type: 'text' }},
                { elem: 'input', attrs: { type: 'submit' }}
            ]
        });

        assert.deepEqual(BEM.blocks['i-block'].each(block.elem('input'), undefined, function(input, index) {
            return this.attr('type');
        }), ['text', 'submit']);
    });

    it('Получить атрибуты type нескольких тегов через один колбек', function() {
        var block = BEM.blocks['i-block'].create({
            block: 'i-block',
            content: [
                { elem: 'input', attrs: { type: 'text' }},
                { elem: 'input', attrs: { type: 'submit' }}
            ]
        });

        assert.deepEqual(BEM.blocks['i-block'].each(block.elem('input'), function(input, index) {
            return this.attr('type');
        }), ['text', 'submit']);
    });

});
