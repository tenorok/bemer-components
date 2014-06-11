describe('i-component.', function() {

    describe('Модификатор focus.', function() {

        var component;

        beforeEach(function() {
            component = BEM.blocks['i-component'].create({
                block: 'i-component',
                content: {
                    elem: 'control',
                    tag: 'input',
                    attrs: { type: 'text' }
                }
            });
            component.domElem.appendTo('body');
        });

        afterEach(function() {
            BEM.DOM.destruct(component.domElem);
        });

        it('Должен устанавливаться при получении настоящего фокуса', function() {
            component.elem('control').focus();
            assert.isTrue(component.hasMod('focus'));
        });

        it('Должен сбрасываться при потере настоящего фокуса', function() {
            component.elem('control').focus().blur();
            assert.isFalse(component.hasMod('focus'));
        });

    });

});
