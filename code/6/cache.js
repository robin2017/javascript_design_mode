var mult = function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a;
};
var plus = function () {
    var a = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a + arguments[i];
    }
    return a;
};
//1、缓存代理工厂
var createProxyFactory = function (fn) {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments);
    }
};
var proxyMult = createProxyFactory(mult),
    proxyPlus = createProxyFactory(plus);
//2、不带缓存的
console.log(mult(1, 2, 3, 4)); // 输出：24
console.log(plus(1, 2, 3, 4)); // 输出：10
//3、带缓存的（锦上添花）
console.log(proxyMult(1, 2, 3, 4)); // 输出：24
console.log(proxyPlus(1, 2, 3, 4)); // 输出：10
