var obj1 = {
    name: 'obj1Name',
    getName: function () {
        return this.name;
    }
};
var obj2 = {
    name: 'obj2Name'
};
console.log(obj1.getName()); //obj1Name
//obj1.getName函数内的this指向了call的参数obj2
console.log(obj1.getName.call(obj2)); //obj2Name