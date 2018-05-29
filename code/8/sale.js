var salesOffices = {}; // 定义售楼处
salesOffices.clientList = []; // 缓存列表，存放 订阅者的回调函数
//1、发布者管理订阅者的回调函数fn
salesOffices.listen = function (fn) { // 增加订 阅者
    this.clientList.push(fn); // 订阅的消 息添加进缓存列表
};
salesOffices.trigger = function () { // 发布消息
    for (var i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments); // (2) // arguments 是发布消息时带上的参数
    }
};
//2、添加订阅者
salesOffices.listen(function (price, squareMeter) { // 小明订阅消息
    console.log('通知小明价格= ' + price);
    console.log('通知小明squareMeter= ' + squareMeter);
});
salesOffices.listen(function (price, squareMeter) { // 小红订阅消息
    console.log('通知小红价格= ' + price);
    console.log('通知小红squareMeter= ' + squareMeter);
});
//3、发布者发布消息
salesOffices.trigger(2000000, 88);
salesOffices.trigger(3000000, 110);
// 通知小明价格= 2000000
// 通知小明squareMeter= 88
// 通知小红价格= 2000000
// 通知小红squareMeter= 88
// 通知小明价格= 3000000
// 通知小明squareMeter= 110
// 通知小红价格= 3000000
// 通知小红squareMeter= 110