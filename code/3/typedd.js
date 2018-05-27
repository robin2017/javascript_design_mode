//1、判断数据类型
var isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
};

//2、将所有可能的数据类型判断放在Type对象上面
var Type = {};
for (var i = 0, type = ['String', 'Array', 'Number'], len = type.length; i < len; i++) {
    Type['is' + type[i]] = (function (t) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + t + ']';
        }
    })(type[i])
}

var isArray = isType('Array');
console.log(isArray([]));//true
console.log(Type.isArray([]));//true
