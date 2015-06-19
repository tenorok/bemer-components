bemer.match('textarea', {

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

});
