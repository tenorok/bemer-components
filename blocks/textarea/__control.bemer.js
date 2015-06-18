bemer.match('textarea__control', {

    tag: 'textarea',

    attrs: function() {
        var attrs = {};

        if(this.bemjson.name) {
            attrs.name = this.bemjson.name;
        }

        if(this.bemjson.placeholder) {
            attrs.placeholder = this.bemjson.placeholder;
        }

        return attrs;
    }

});
