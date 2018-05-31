/**
 * 中止迭代器（找符合条件的数组元素下标的函数）
 * 回调函数参数：元素
 * 返回：回调函数返回为true时集合对应的下标
 * */
Array.prototype.robinInterrupt = function (callback) {
    if (this.length == 0) return undefined;
    //for的简写形式（当for的第二个参数为undefined，则循环结束）
    for (var i = 0, item; item = this[i++];) {
        if (callback(item) === true) {
            break;
        }
    }
    return i - 1;
};
//示例
console.log([1, 3, 5, 7].robinInterrupt(function (item) {
    if (item > 4)return true;
}));//2
