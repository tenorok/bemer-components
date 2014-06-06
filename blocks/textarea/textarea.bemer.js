bemer.match('textarea', {

    tag: 'textarea',

    attrs: function() {
        if(this.bemjson.placeholder) {
            return {
                placeholder: this.bemjson.placeholder
            };
        }
    }

});
