//1、通用对象:把发布—订阅的功能提取出来，放在一个单独的对象内：
var event = {
        clientList: {},
	//1.1、增加订阅者
        listen: function( key, fn ){
                if ( !this.clientList[ key ] ){
                        this.clientList[ key ] = [];
                }
                        this.clientList[ key ].push( fn ); // 订阅的消息添加进缓存列表
                },
	//1.2、发布者发布
                trigger: function(){
                        var key = Array.prototype.shift.call( arguments ), 
                        fns = this.clientList[ key ];
                        if ( !fns || fns.length === 0 ){ // 如果没有绑定对应的消息
                                return false;
                        }
                        for( var i = 0, fn; fn = fns[ i++ ]; ){
                                fn.apply( this, arguments ); //  arguments 是trigger 时带上的参数
                        }
                },

      //1.3、删除订阅者 
	remove:function( key, fn ){
                var fns = this.clientList[ key ];
                if ( !fns ){ // 如果key 对应的消息没有被人订阅，则直接返回
                        return false;
                }
                if ( !fn ){ // 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
                        fns && ( fns.length = 0 );
                }else{
                        for ( var l = fns.length - 1; l >=0; l-- ){ // 反向遍历订阅的回调函数列表
                                var _fn = fns[ l ];
                                if ( _fn === fn ){
                                        fns.splice( l, 1 ); // 删除订阅者的回调函数
                                }
                        }
                }
        }

        };
//2、通用函数:安装事件对象(最好两个合并到一起)
var installEvent = function( obj ){
                for ( var i in event ){
                        obj[ i ] = event[ i ];
                }
        };
        //3、定义发布者
        var salesOffices = {};
      //4、发布者管理对象
        installEvent( salesOffices );
    
        var mingCallback = function( price ){ // 小明订阅消息
                console.log( '小明收到通知:价格= ' + price ); };
        var hongCallback = function( price ){ // 小红订阅消息
                console.log( '小红收到通知:价格= ' + price ) };
        //5、订阅者订阅(只订阅感兴趣的)
        salesOffices.listen( 'squareMeter88', mingCallback);
        salesOffices.listen( 'squareMeter100', hongCallback);
        //5.1、订阅者退订
        salesOffices.remove('squareMeter88',mingCallback);
       //6、发布者发布
        salesOffices.trigger( 'squareMeter88', 2000000 ); // 输出：2000000
        salesOffices.trigger( 'squareMeter100', 3000000 ); // 输出：3000000
