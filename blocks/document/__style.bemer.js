bemer.match('document__style', {

    construct: function() {
        if(typeof this.bemjson.style === 'string') {
            this._content = this.bemjson.style || '';
        } else if(typeof this.bemjson.style === 'object') {
            this._attrs = this.bemjson.style.attrs || {};
            this._content = this.bemjson.style.content || '';
        }
    },
    tag: 'style',
    bem: false,
    options: {
        escape: { content: false }
    },
    attrs: function(attrs) {
        return this._attrs || attrs || {};
    },
    content: function(content) {
        return this._content || content || '';
    }

});
