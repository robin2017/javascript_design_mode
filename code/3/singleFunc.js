//单例模式(函数fn的执行结果ret是单例的)
var getSingle = function (fn) {
    var ret;
    return function () {
        return ret || ( ret = fn.apply(this, arguments) );
    };
};
//fn的执行结果为'234'，是单例的
var single = getSingle(function () {
    return '234'
});
var s1 = single();
var s2 = single();
console.log(s1 === s2);//true

