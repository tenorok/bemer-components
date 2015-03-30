bemer.match('document__script', {

    tag: 'script',
    bem: false,
    options: {
        escape: { content: false }
    },
    attrs: function() {
        return typeof this.bemjson.script === 'string'
            ? { src: this.bemjson.script }
            : this.bemjson.script.attrs || {};
    },
    content: function() {
        return this.bemjson.script.content || '';
    }

});
