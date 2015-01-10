bemer.match('tabs', {

    tag: 'ul',

    content: function() {
        return this.bemjson.items.map(function(item) {
            item.elem = 'item';
            item.name = this.bemjson.name;
            item.elemMods = { checked: !!item.checked };
            return item;
        }, this);
    }

});
