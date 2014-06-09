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
        return ['.js', '.bemer.js', '.test.js'].reduce(function(content, postfix) {
            var filePath = path.join('blocks/', this.block, this.block + postfix);

            if(fs.existsSync(filePath)) {
                return content += fs.readFileSync(filePath, { encoding: 'utf8' });
            } else {
                return content;
            }
        }.bind(this), '');
    }

};

module.exports = Test;
