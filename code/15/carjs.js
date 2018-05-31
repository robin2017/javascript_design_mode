var car = {
    move: function () {
        console.log('在陆地上移动')
    }
};
var robotMove = function () {
    console.log('说话')
};
var airplainMove = function () {
    console.log('飞机起飞')
};
//直接修改对象方法
var car2_1 = Object.create(car);
var car2_2 = Object.create(car);
var car3 = Object.create(car);
car2_1.move = function () {
    car.move();
    robotMove();
};
car2_2.move = function () {
    car.move();
    airplainMove();
};
car3.move = function () {
    car.move();
    robotMove();
    airplainMove();
};
car.move();
console.log('------');
car2_1.move();
console.log('------');
car2_2.move();
console.log('------');
car3.move();
// 在陆地上移动
// ------
// 在陆地上移动
// 说话
// ------
// 在陆地上移动
// 飞机起飞
// ------
// 在陆地上移动
// 说话
// 飞机起飞