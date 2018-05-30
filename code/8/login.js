//1、回调实现异步
login.succ(function(data){
                header.setAvatar( data.avatar); // 设置header 模块的头像
        //1.1、增加功能需要修改代码
	address.refresh(); // 刷新收货地址管理
        });



//2、订阅发布模式实现异步
$.ajax('http://xxx.com?login',function(data){//登录成功
login.trigger('loginSucc',data);//发布登录成功的消息
});


        var header = (function(){ // header 模块
                login.listen( 'loginSucc', function( data){
                        header.setAvatar( data.avatar );
                });
                return {
                        setAvatar: function( data ){
                                console.log( '设置header 模块的头像' );
                        }
                }
        })();

//2.1、增加功能不需要修改,符合开闭原则
var address = (function(){ // 收货地址管理
                login.listen( 'loginSucc', function( obj ){
                        address.refresh( obj );
                });
                return {
                        refresh: function( avatar ){
                                console.log( '刷新收货地址列表' );
                        }
                }
        })();
