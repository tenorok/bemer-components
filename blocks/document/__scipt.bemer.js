bemer.match('document__script', {

    construct: function() {
        if(typeof this.bemjson.script === 'string') {
            this._attrs = { src: this.bemjson.script };
        } else if(typeof this.bemjson.script === 'object') {
            this._attrs = this.bemjson.script.attrs || {};
            this._content = this.bemjson.script.content || '';
        }
    },
    tag: 'script',
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
