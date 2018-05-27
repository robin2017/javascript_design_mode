var closure = function () {
    var value = 0;
    return {
        next: function () {
            value++;
            console.log(value);
        }
    }
};
var clo = closure();
clo.next();//1
clo.next();//2
clo.next();//3

var object = {
    value: 0,
    next: function () {
        this.value++;
        console.log(this.value);
    }
};
object.next();//1
object.next();//2
object.next();//3
