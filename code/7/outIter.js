//1、通用的外部迭代器函数(与集合关联)
var Iterator = function (obj) {
    //函数内部定义的局部变量都不可被访问，只是被闭包调用
    var current = 0;
    var next = function () {
        current += 1;
    };
    var isDone = function () {
        return current >= obj.length;
    };
    var getCurrItem = function () {
        return obj[current];
    };
    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem
    }
};
//2、复杂的运算函数（与业务关联）
var compare = function (iterator1, iterator2) {
    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            throw new Error('iterator1 和iterator2 不相等');
        }
        iterator1.next();
        iterator2.next();
    }
    console.log('iterator1 和iterator2 相等');
};
var iterator1 = Iterator([1, 2, 3]);
var iterator2 = Iterator([1, 2, 3]);
compare(iterator1, iterator2); // 输出：iterator1 和iterator2 相等
