var makeSound = function (animal) {
    if (animal && typeof animal.sound === 'function') {
        animal.sound()
    }
};

var Duck = function () {};
//js的多态需要implements接口
Duck.prototype.sound = function () {
    console.log('--DUCK--SOUND--')
};
var Chicken = function () {}
Chicken.prototype.sound = function () {
    console.log('--CHICKEN--SOUND--')
};
makeSound(new Duck());//--DUCK--SOUND--
makeSound(new Chicken());//--CHICKEN--SOUND--
