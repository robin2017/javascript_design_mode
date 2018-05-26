function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};
var objectFactory = function (constructor) {
    var obj = new Object(), // 从Object.prototype 上克隆一个空的对象
        Constructor = [].shift.call(arguments); // 不太明白？？？！！！
    obj.__proto__ = Constructor.prototype; // 指向正确的原型
    var ret = Constructor.apply(obj, arguments); // 借用外部传入的构造器给obj 设置属性
    return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
};
var p = new Person('robin');
var o = objectFactory(Person, 'sven');
console.log(p);//Person { name: 'robin' }
console.log(o);//Person { name: 'sven' }