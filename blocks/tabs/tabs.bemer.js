bemer.match('tabs', {

    tag: 'ul',

    content: function() {
        return this.bemjson.items.map(function(item) {
            item.elem = 'item';
            item.name = this.bemjson.name;
            return item;
        }, this);
    }

});
