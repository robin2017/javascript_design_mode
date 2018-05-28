//一系列算法作为策略对象的成员函数(策略成员函数可以动态添加)
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};
var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};

console.log(calculateBonus('S', 20000)); //80000
console.log(calculateBonus('A', 10000)); //30000