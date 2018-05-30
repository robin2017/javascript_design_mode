//1、全局发布订阅对象(一个私有变量，三个公有方法)
var Event = (function(){
	        //1.1、这相当于事件总线
                var eventBus = {},
                //1.2、订阅者的api
		listen,
		//1.3、发布者的api
                trigger,
		//1.4、订阅者的api
                remove;
                listen = function( key, fn ){
                        if ( !eventBus[ key ] ){
                              eventBus[ key ] = [];
                        }
                      eventBus[ key ].push( fn );
                };
                trigger = function(){
                        var key = Array.prototype.shift.call( arguments ),
                        fns =eventBus[ key ];
                        if ( !fns || fns.length === 0 ){
                                return false;
                        }
                        for( var i = 0, fn; fn = fns[ i++ ]; ){
                                fn.apply( this, arguments );
                        }
                };
	remove = function( key, fn ){
                        var fns = eventBus[ key ];
                        if ( !fns ){
                                return false;
                        }
                        if ( !fn ){
                                fns && ( fns.length = 0 );
                        }else{
                                for ( var l = fns.length - 1; l >=0; l-- ){
                                        var _fn = fns[ l ];
                                        if ( _fn === fn ){
                                                fns.splice( l, 1 );
                                        }
                                }
                        }
                };
	return {
                        listen: listen,
                        trigger: trigger,
                        remove: remove
                }
        })();
	//2、订阅函数
        Event.listen( 'squareMeter88', function( price ){ // 小红订阅消息
                console.log( '价格= ' + price ); // 输出：'价格=2000000'
        });
        //3、发布函数
        Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布消息
