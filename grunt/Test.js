var fs = require('fs'),
    path = require('path');

function Test(block) {
    this.block = block || 'main';
}

Test.prototype = {

    build: function() {
        var deps = '';

        if(this.block === 'i-control') {
            deps = this._getIBlock();
        } else if(this.block !== 'i-block') {
            deps = this._getIBlock() + this._getIControl();
        }

        fs.writeFileSync(
            path.join('test', 'test.js'),
            deps + this._readBlockFiles()
        );
    },

    _readBlockFiles: function() {
        return ['.js', '.bemer.js', '.test.js'].reduce(function(content, postfix) {
            var filePath = path.join('blocks/', this.block, this.block + postfix);

            if(fs.existsSync(filePath)) {
                return content += fs.readFileSync(filePath, { encoding: 'utf8' });
            } else {
                return content;
            }
        }.bind(this), '');
    },

    _getIBlock: function() {
        return fs.readFileSync('blocks/i-block/i-block.js', { encoding: 'utf8' });
    },

    _getIControl: function() {
        return fs.readFileSync('blocks/i-block/i-block.js', { encoding: 'utf8' });
    }

};

module.exports = Test;
