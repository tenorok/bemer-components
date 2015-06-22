bemer
    .match('checkbox', {
        js: true,
        tag: 'label',
        content: function() {
            return [
                {
                    elem: 'control',
                    name: this.bemjson.name,
                    value: this.bemjson.value
                },
                { elem: 'pseudo' }
            ];
        }
    })
    .match('checkbox__control', {
        tag: 'input',
        attrs: function() {
            var attrs = {
                type: 'checkbox',
                value: this.bemjson.value || ''
            };

            if(this.bemjson.name) {
                attrs.name = this.bemjson.name;
            }

            return attrs;
        }
    })
    .match('checkbox_checked__control', {
        attrs: function() {
            var attrs = this.__base.apply(this, arguments);
            attrs.checked = true;
            return attrs;
        }
    })
    .match('checkbox_disabled__control', {
        attrs: function() {
            var attrs = this.__base.apply(this, arguments);
            attrs.disabled = true;
            return attrs;
        }
    });
