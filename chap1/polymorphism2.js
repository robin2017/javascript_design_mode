//做什么
var renderMap = function(map){
  if(map && typeof map.show ==='function') {
    map.show()
  }
}
//怎么做
var googleMap = {
  show:function(){
    console.log('开始渲染谷歌地图');
  }
}
//去做
renderMap(googleMap)
