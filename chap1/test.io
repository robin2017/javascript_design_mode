Animal := Object clone //克隆动物对象
Animal makeSound := method("animal makeSound wawa" print);
Dog := Animal clone //克隆狗对象
Dog eat := method("dog eat haha" print)
Animal makeSound
Dog eat
Dog makeSound//原型委托