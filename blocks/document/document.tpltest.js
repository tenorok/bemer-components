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

    it('С атрибутом link и с элементами link в атрибуте head', function() {
        assert.isTrue(htmlDiffer({ block: 'document', link: [
                'first.css',
                {
                    rel: 'shortcut icon',
                    href: 'favicon.ico'
                }
            ], head: [
                { block: 'document', elem: 'link', attrs: { href: 'second.css' }}
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<link rel="stylesheet" href="first.css">' +
                        '<link rel="shortcut icon" href="favicon.ico">' +
                        '<link href="second.css">' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом style и с элементами style в атрибуте head', function() {
        assert.isTrue(htmlDiffer({ block: 'document', style: [
                'h1 { font-size: 140%; }',
                {
                    attrs: {
                        type: 'text/css',
                        media: 'print'
                    },
                    content: 'h2 { font-family: "Elektra Pro"; }'
                }
            ], head: [
                { block: 'document', elem: 'style', content: 'header { display: block; }' },
                { block: 'document', elem: 'style', attrs: { media: 'print' }, content: 'nav { display: block; }' }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<style>h1 { font-size: 140%; }</style>' +
                        '<style type="text/css" media="print">h2 { font-family: "Elektra Pro"; }</style>' +
                        '<style>header { display: block; }</style>' +
                        '<style media="print">nav { display: block; }</style>' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С атрибутом script', function() {
        assert.isTrue(htmlDiffer({ block: 'document', script: [
                'first.js',
                {
                    attrs: {
                        type: 'text/javascript',
                        src: 'second.js'
                    }
                },
                { content: 'var i = "inline script";' },
                {
                    attrs: {
                        type: 'text/javascript'
                    },
                    content: 'var i = "inline script with type";'
                }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head>' +
                        '<script src="first.js"></script>' +
                        '<script type="text/javascript" src="second.js"></script>' +
                        '<script>var i = "inline script";</script>' +
                        '<script type="text/javascript">var i = "inline script with type";</script>' +
                    '</head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}"></body>' +
                '</html>'));
    });

    it('С элементами script в атрибуте content и c атрибутом bodyScript', function() {
        assert.isTrue(htmlDiffer({ block: 'document', content: [
                'Paragraph.',
                { block: 'document', elem: 'script', content: 'var s;' },
                { block: 'document', elem: 'script', attrs: { src: 'zero.js' }}
            ], bodyScript: [
                'first.js',
                {
                    attrs: {
                        type: 'text/javascript',
                        src: 'second.js'
                    }
                },
                { content: 'var i = "inline script";' },
                {
                    attrs: {
                        type: 'text/javascript'
                    },
                    content: 'var i = "inline script with type";'
                }
            ] },
                '<!DOCTYPE html>' +
                '<html>' +
                    '<head></head>' +
                    '<body class="body i-bem" data-bem="{&quot;body&quot;:{}}">' +
                        'Paragraph.' +
                        '<script>var s;</script>' +
                        '<script src="zero.js"></script>' +
                        '<script src="first.js"></script>' +
                        '<script type="text/javascript" src="second.js"></script>' +
                        '<script>var i = "inline script";</script>' +
                        '<script type="text/javascript">var i = "inline script with type";</script>' +
                    '</body>' +
                '</html>'));
    });

});
