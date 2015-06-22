bemer
    .match('textarea', {
        js: true,
        tag: 'div',
        content: function() {
            return {
                elem: 'control',
                name: this.bemjson.name,
                placeholder: this.bemjson.placeholder,
                content: this.bemjson.content
            };
        }

    })
    .match('textarea_disabled__control', {
        attrs: function() {
            var attrs = this.__base.apply(this, arguments);
            attrs.disabled = true;
            return attrs;
        }
    });
