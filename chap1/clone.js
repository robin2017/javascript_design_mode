
var Plane = function(){
  this.blood = 1,
  this.attack = 2
};
Plane.prototype.attackEnemy = function () {
  console.log('i am coming')
};
var plane = new Plane();

var pl1 = Object.create(plane);
var pl2 = es4Create(plane);
console.log(pl1);
console.log(pl2);

function es4Create(obj) {
  var F = function(){};
  F.prototype = obj;
  return new F();
}
