var person = (function(){
  var _name = "robin";
  return {
    getName:function(){
      return _name;
    }
  }
})();
//私有属性
console.log(person._name);//undefined
//公有方法
console.log(person.getName());//robin
