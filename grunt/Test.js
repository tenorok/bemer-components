var fs = require('fs'),
    path = require('path');

function Test(block) {
    this.block = block || 'main';
}

Test.prototype = {

    build: function() {
        var deps = '',
            files = [this.block];

        if(this.block === 'i-control') {
            deps = this._getIBlock() + this._getIComponent();
        } else if(this.block === 'i-component') {
            deps = this._getIBlock();
        } else if(this.block !== 'i-block') {
            deps = this._getIBlock() + this._getIComponent() + this._getIControl();
        }

        if(this.block === 'textarea') {
            files = files.concat(['__control']);
        }

        fs.writeFileSync(
            path.join('test', 'test.js'),
            deps + this._readBlockFiles(files)
        );
    },

    _readBlockFiles: function(files) {
        return files.reduce(function(content, file) {
            return content += ['.js', '.bemer.js', '.test.js'].reduce(function(content, postfix) {
                var filePath = path.join('blocks/', files[0], file + postfix);

                if(fs.existsSync(filePath)) {
                    return content += fs.readFileSync(filePath, { encoding: 'utf8' });
                } else {
                    return content;
                }
            }.bind(this), '');
        }.bind(this), '');
    },

    _getIBlock: function() {
        return fs.readFileSync('blocks/i-block/i-block.js', { encoding: 'utf8' });
    },

    _getIComponent: function() {
        return fs.readFileSync('blocks/i-component/i-component.js', { encoding: 'utf8' });
    },

    _getIControl: function() {
        return fs.readFileSync('blocks/i-control/i-control.js', { encoding: 'utf8' });
    }

};

module.exports = Test;
