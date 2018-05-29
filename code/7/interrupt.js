Array.prototype.interrupt = function (callback) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (callback(i, this[i]) === false) { // callback 的执行结果返回false，提前终止迭代
            break;
        }
    }
    return this[i];
};
//找到满足/不满足的就终止迭代
var result = [1, 2, 3, 4, 5].interrupt(function (i, n) {
    if (n > 3) { // n 大于3 的时候终止循环
        return false;
    }
    return n
});
console.log(result);//4
