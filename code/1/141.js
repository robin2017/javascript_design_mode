var Plane = function () {
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create(plane);
console.log(clonePlane.blood);  // 输出：Object {blood: 500, attackLevel: 10, defenseLevel: 7}

//在不支持Object.create 方法的浏览器中，则可以使用以下代码：
Object.create = Object.create || function (obj) {
        var F = function () {
        };
        F.prototype = obj;
        return new F();
    }