global.name = "globalName";
var myObject = {
    name: 'robin',
    getName: function () {
        return this.name;
    }
};
//成员方法变成了普通方法
var getName = myObject.getName;
console.log(getName()); //globalName
console.log(myObject.getName());//robin
