if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        arr.forEach(function(item) {
            sum += item;
        });
        return sum;
    },

    remove : function(arr, item) {
        var index = arr.indexOf(item);
        while (index !== -1) {
            arr.splice(index,1);
            index = arr.indexOf(item);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var index = arr.indexOf(item);
        while (index !== -1) {
            arr.splice(index,1);
            index = arr.indexOf(item);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        arr2.forEach(function(item) {
            arr1.push(item);
        });
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(itemInArr) {
            if (item === itemInArr) {
                count ++;
            }
        });
        return count;
    },

    duplicates : function(arr) {
        //doing it with set because why not
        var ret = [];
        var alreadySeen = [];
        arr.forEach(function(item) {
            if (alreadySeen.indexOf(item) === -1) {
                alreadySeen.push(item);
            } else if(ret.indexOf(item) === -1) {
                ret.push(item);
            } 
        });
        return ret;
    },

    square : function(arr) {
        return arr.map(function(item) {
            return item * item;
        });
    },

    findAllOccurrences : function(arr, target) {
        var ret = [];
        arr.forEach(function(item, index) {
            if (item === target) {
                ret.push(index);
            }
        });
        return ret;
    }
  };
});
