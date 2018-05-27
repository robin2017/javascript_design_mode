//普通函数的变量暴露在全局环境中
var commonVar = 'commonVar';
var commonFunc = function () {
    console.log(commonVar)
};

//普通函数转为闭包:封装在匿名立即调用函数内，里面返回一个函数
var closureFunc = (function () {
    //闭包的变量在函数内
    var closureVar = 'closureVar';
    return function () {
        console.log(closureVar);
    }
})();
commonFunc();//commonVar
closureFunc();//closureVar
