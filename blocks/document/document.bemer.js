bemer.match('document', {

    tag: false,
    bem: false,

    content: function() {
        var content = [].concat(this.bemjson.content);

        if(this.bemjson.bodyScript) {
            this.bemjson.bodyScript.forEach(function(stringOrObject) {
                content.push({
                    block: this.bemjson.block,
                    elem: 'script',
                    script: stringOrObject
                });
            }, this);
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
                        style: this.bemjson.style,
                        script: this.bemjson.script,
                        head: this.bemjson.head
                    },
                    {
                        block: 'body',
                        content: content
                    }
                ]
            }
        ];
    }

});