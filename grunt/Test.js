var fs = require('fs'),
    path = require('path');

function Test(block) {
    this.block = block || 'main';
}

Test.prototype = {

    build: function() {
        fs.writeFileSync(
            path.join('test', 'test.js'),
            this._readBlockFiles()
        );
    },

    _readBlockFiles: function() {
        return ['.bemer.js', '.test.js'].reduce(function(content, postfix) {
            return content += fs.readFileSync(
                path.join('blocks/', this.block, this.block + postfix),
                { encoding: 'utf8' }
            );
        }.bind(this), '');
    }

};

module.exports = Test;
