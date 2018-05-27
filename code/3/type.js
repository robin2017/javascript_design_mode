//1、hml的写法
function typeOf1(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}
//2、改进的写法，没有用闭包
function typeOf2(obj) {
    const arr = [
            'Boolarn',
            'Number',
            'String',
            'Function',
            'Array',
            'Date',
            'RegExp',
            'Undefined',
            'Null',
            'Object'],
        toString = Object.prototype.toString;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (toString.call(obj) == '[object ' + arr[i] + ']') {
            return arr[i];
        }
    }

}
var arr = [];
console.log(typeOf1(arr));//array
console.log(typeOf2(arr));//Array
console.log(Object.prototype.toString.call(arr) === '[object Array]');//true