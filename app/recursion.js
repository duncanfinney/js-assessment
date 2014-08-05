if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        listFiles: function(data, fileName) {
            var ret = [];
            var _listFiles = function(d) {
                if (d.files) {
                    d.files.forEach(function(file) {
                        if (typeof file !== 'string') {
                            //is directory 
                            _listFiles(file);
                        } else if (!fileName || file.indexOf(fileName) !== -1) {
                            ret.push(file);
                        }
                    });
                }
            };
            _listFiles(data);
            return ret;

        },

        permute: function(arr) {

        }
    };
});
