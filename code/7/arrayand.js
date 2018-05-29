//1、通用的外部迭代器函数(与集合关联)
var Iterator = function (obj) {
    var current = 0;
    var next = function () {
        current += 1;
    };
    //添加了排序方法
    var sort = function () {
        obj = Array.prototype.sort.call(obj);
    };
    var isDone = function () {
        return current >= obj.length;
    };
    var getCurrItem = function () {
        return obj[current];
    };
    return {
        next: next,
        sort: sort,
        isDone: isDone,
        getCurrItem: getCurrItem
    }
};

//2、复杂的运算函数（与业务关联）
var and = function (iter1, iter2) {
    //先对两个排序
    iter1.sort();
    iter2.sort();
    var result = [];
    while (!iter1.isDone() && !iter2.isDone()) {
        if (iter1.getCurrItem() == iter2.getCurrItem()) {
            result.push(iter1.getCurrItem());
            iter1.next();
            iter2.next();
        } else if (iter1.getCurrItem() > iter2.getCurrItem()) {
            iter2.next();
        } else {
            iter1.next();
        }

    }
    return result;
};
//3、运算
var it1 = Iterator([2, 1, 3]);
var it2 = Iterator([4, 2, 1]);
console.log(and(it1, it2));//[ 1, 2 ]

