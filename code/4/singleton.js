//伪类的定义
var Singleton = function (name) {
    this.name = name;
};
Singleton.prototype.getName = function () {
    console.log(this.name);
};
//类的静态方法作为全局访问点
Singleton.getInstance = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

a = Singleton.getInstance('sven1');
//instance只存储第一个单例，第二个无效
var b = Singleton.getInstance('sven2');
console.log(a === b); // true
b.getName();//sven1
