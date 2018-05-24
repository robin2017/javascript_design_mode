var person = {
  name:'robin',
  age:25
}
var p = Object.create(person);
console.log(p)//{}

var Plane = function(){
  this.blood = 1,
  this.attack = 2
}
var plane = new Plane();
plane.blood = 3;
plane.attack = 4;
var pl = Object.create(plane);
var pl2 = es4Create(plane);
console.log(pl);
console.log(pl2);

function es4Create(obj) {
  var f = function(){};
  f.prototype = obj;
  return new f();
}
