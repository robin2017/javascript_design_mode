//给Function.prototype添加上两个之前没有的函数，则赋予了函数aop功能
Function.prototype.AOPBefore = function (beforefn) {
    var __self = this; // Function.prototype对象的AOPBefore属性中this指向了该对象，即函数原型
    return function () { // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this, arguments); // 执行新函数，修正this
        return __self.apply(this, arguments); // 执行原函数
    }
};
Function.prototype.AOPAfter = function (afterfn) {
    var __self = this;
    return function () {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};
//业务函数
var func = function () {
    console.log('骑士屠龙');
};
//动态织入（类似与 nothisFunc = thisFunc.bind(obj)）
func = func.AOPBefore(function () {
    console.log('---记者开始记录---')
}).AOPAfter(function () {
    console.log('---记者结束记录---')
});
//执行业务函数
func();
// ---记者开始记录---
// 骑士屠龙
// ---记者结束记录---
