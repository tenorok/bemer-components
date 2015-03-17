describe('body.', function() {

    var body;

    beforeEach(function() {
        body = BEM.DOM.append(BEM.DOM.scope, bemer({
            block: 'body',
            tag: 'div' // Заглушка для корректной работы тестов на JS.
        })).bem('body');
    });

    afterEach(function() {
        BEM.DOM.destruct(body.domElem);
    });

    describe('Метод isSupportSVG.', function() {

        // В PhantomJS есть поддержка SVG.

        it('Проверить поддержку SVG', function() {
            assert.isTrue(body.__self.isSupportSVG());
        });

        it('Проверить отсутствие CSS-класса', function() {
            assert.isFalse(body.domElem.hasClass('body_svg_unsupported'));
        });

    });

});
