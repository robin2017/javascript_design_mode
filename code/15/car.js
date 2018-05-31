var Car = function () {
};
Car.prototype.move = function () {
    console.log('在陆地上移动')
};
var Robot = function (car) {
    this.car = car;
};
Robot.prototype.move = function () {
    this.car.move();
    console.log('说话')
};
var Airplain = function (car) {
    this.car = car;
};
Airplain.prototype.move = function () {
    this.car.move();
    console.log('飞机起飞')
};
var car = new Car();
car.move();
console.log('----------');
var robot = new Robot(car);
robot.move();
console.log('----------');
var airplain = new Airplain(car);
airplain.move();
console.log('----------');
var robotAirplain = new Airplain(robot);
robotAirplain.move();
//在陆地上移动
//----------
//在陆地上移动
//说话
//----------
//在陆地上移动
//飞机起飞
//----------
//在陆地上移动
//说话
//飞机起飞
