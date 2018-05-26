//直接在原型上修改，覆盖了自带的bind函数
Function.prototype.bind = function(context){//context是指需要绑定给this的对象
  var self = this;//成员方法内的this指向的就是对象，即Function
  return function(){//arguments代表返回的函数的参数，目前为空，使用时可以放入值
    return self.apply(context,arguments)
  }
}
var obj = {
  name:'ROBIN'
}
var func = function(){
  console.log(this.name)
}.bind(obj);

func()
