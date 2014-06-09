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

});
