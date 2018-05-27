var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3));//普通函数的一般调用
console.log(sum.call(null, 2, 3));//普通函数的call调用
console.log(sum.apply(null, [2, 3]));//普通函数的apply调用
