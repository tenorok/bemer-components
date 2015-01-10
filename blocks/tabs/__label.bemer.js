bemer.match('tabs__label', {

    tag: 'label',

    content: function(text) {
        return [
            {
                elem: 'control',
                attrs: {
                    name: this.bemjson.name,
                    value: this.bemjson.value
                }
            },
            {
                elem: 'text',
                content: text
            }
        ];
    }

});
