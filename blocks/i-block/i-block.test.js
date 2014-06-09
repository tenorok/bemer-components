describe('i-block.', function() {

    it('Получить BEMJSON', function() {
        assert.deepEqual(BEM.blocks['i-block'].getBEMJSON(), { block: 'i-block' });
    });

    it('Получить экземпляр блока', function() {
        assert.isTrue(BEM.blocks['i-block'].create() instanceof BEM.DOM);
    });

});
