Array.prototype.robinEach = function (callback) {
    for (var i = 0, l = this.length; i < l; i++) {
        callback.call(this[i], i, this[i]); // 把下标和元素当作参数传给callback 函数
    }
};
[1, 2, 3].robinEach(function (i, n) {
    console.log([i, n]);
});
//[ 0, 1 ]
//[ 1, 2 ]
//[ 2, 3 ]
