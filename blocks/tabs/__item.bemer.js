bemer.match('tabs__item', {

    tag: 'li',

    content: function(text) {
        return {
            elem: 'label',
            name: this.bemjson.name,
            value: this.bemjson.value,
            checked: this.bemjson.elemMods.checked,
            content: text
        };
    }

});
