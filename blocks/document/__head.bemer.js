bemer.match('document__head', {

    tag: 'head',
    bem: false,

    content: function() {
        var content = [];

        if(this.bemjson.title) {
            content.push({
                tag: 'title',
                content: this.bemjson.title
            });
        }

        if(this.bemjson.meta) {
            this.bemjson.meta.forEach(function(attrs) {
                content.push({ elem: 'meta', attrs: attrs });
            });
        }

        if(this.bemjson.link) {
            this.bemjson.link.forEach(function(hrefOrAttrs) {
                content.push({
                    elem: 'link',
                    attrs: typeof hrefOrAttrs === 'string'
                        ? { rel: 'stylesheet', href: hrefOrAttrs }
                        : hrefOrAttrs
                });
            });
        }

        if(this.bemjson.script) {
            this.bemjson.script.forEach(function(srcOrAttrs) {
                content.push({
                    elem: 'script',
                    attrs: typeof srcOrAttrs === 'string'
                        ? { src: srcOrAttrs }
                        : srcOrAttrs
                });
            });
        }

        return content;
    }

});
