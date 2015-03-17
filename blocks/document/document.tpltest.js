describe('document.', function() {

    it('Без атрибутов', function() {
        assert.isTrue(htmlDiffer({ block: 'document' },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head></head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом content', function() {
        assert.isTrue(htmlDiffer({ block: 'document', content: 'Page content.' },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head></head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}">Page content.</body>' +
                '</html>'));
    });

    it('С атрибутом title', function() {
        assert.isTrue(htmlDiffer({ block: 'document', title: 'Hello World!' },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<title>Hello World!</title>' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом meta', function() {
        assert.isTrue(htmlDiffer({ block: 'document', meta: [{
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=1'
            }] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<meta charset="utf-8">' +
                        '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом link', function() {
        assert.isTrue(htmlDiffer({ block: 'document', link: [
                'first.css',
                {
                    rel: 'stylesheet',
                    href: 'second.css'
                }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<link rel="stylesheet" href="first.css">' +
                        '<link rel="stylesheet" href="second.css">' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом script', function() {
        assert.isTrue(htmlDiffer({ block: 'document', script: [
                'first.js',
                {
                    type: 'text/javascript',
                    src: 'second.js'
                }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<script src="first.js"></script>' +
                        '<script type="text/javascript" src="second.js"></script>' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутами content и bodyScript', function() {
        assert.isTrue(htmlDiffer({ block: 'document', content: ['Paragraph.'], bodyScript: [
                'first.js',
                {
                    type: 'text/javascript',
                    src: 'second.js'
                }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head></head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}">' +
                        'Paragraph.' +
                        '<script src="first.js"></script>' +
                        '<script type="text/javascript" src="second.js"></script>' +
                    '</body>' +
                '</html>'));
    });

});
