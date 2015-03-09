bemer.match('document', {

    tag: false,
    bem: false,

    content: function() {
        var content = [].concat(this.bemjson.content);

        if(this.bemjson.bodyScript) {
            this.bemjson.bodyScript.forEach(function(srcOrAttrs) {
                content.push({
                    elem: 'script',
                    attrs: typeof srcOrAttrs === 'string'
                        ? { src: srcOrAttrs }
                        : srcOrAttrs
                });
            });
        }

        return [
            { elem: 'doctype' },
            {
                tag: 'html',
                elem: 'html', // TODO: Удалить эту строку после исправления бага в шаблонизаторе.
                bem: false, // TODO: Удалить эту строку после исправления бага в шаблонизаторе.
                content: [
                    {
                        elem: 'head',
                        title: this.bemjson.title,
                        meta: this.bemjson.meta,
                        link: this.bemjson.link,
                        script: this.bemjson.script
                    },
                    {
                        tag: 'body',
                        elem: 'body', // TODO: Удалить эту строку после исправления бага в шаблонизаторе.
                        bem: false, // TODO: Удалить эту строку после исправления бага в шаблонизаторе.
                        content: content
                    }
                ]
            }
        ];
    }

});
