<template lang="html">
  <div class="map-main">
    <div id="container"></div>
    <div class="mydress" @click="position"></div>
  </div>

</template>
<script>
export default {
  props:{
    mapList:Array,
    pathName:String
  },
  mounted(){
    //this.position();
    //this.mapList.length && this.mapLoad();
  },
  watch:{
    mapList(){
        this.mapLoad();
    }
  },
  data(){
    return {
      mapCenter:[114.503834,38.049003],//石家庄的中心点在哪？
      text:''
    }
  },
  methods:{
    show(obj){
      this.$router.push({ name: this.pathName, query: obj});
    },
    distance(list){
      var that = this;
      var distanceArr =[];
      that.mapList.forEach((n)=>{
        var m1 = new AMap.Marker({
          position: new AMap.LngLat(that.mapCenter[0], that.mapCenter[1])
        });
        var m2 = new AMap.Marker({
            position:new AMap.LngLat(n.x, n.y)
        });
        var p1 = m1.getPosition();
        var p2 = m2.getPosition();
        var textPos = p1.divideBy(2).add(p2.divideBy(2));
        var distance = Math.round(p1.distance(p2));
        distanceArr.push(distance)
      })
      return Math.max.apply(null,distanceArr);
    },
    position(){
      let that = this;
      AMap.plugin('AMap.Geolocation', function() {
         var geolocation = new AMap.Geolocation({
             enableHighAccuracy: true,//是否使用高精度定位，默认:true
             timeout: 10000,          //超过10秒后停止定位，默认：5s
             buttonPosition:'RB',    //定位按钮的停靠位置
             buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
             zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
         });
         window.map.addControl(geolocation);
         geolocation.getCurrentPosition(function(status,result){
           console.log(status,result)
             if(status=='complete'){
                 onComplete(result)
             }else{
                 onError(result)
             }
         });
     });
     //解析定位结果
     function onComplete(data) {

     }
     //解析定位错误信息
     function onError(data) {
        alert('定位失败！\n错误信息：\n' +JSON.stringify(data))
     }
    },
    mapLoad(){
      console.log('执行')
      var that = this;
      console.log(document.getElementById('container'));
      window.map  = new AMap.Map('container', {
  			resizeEnable: true,
  			zoom: 13
  		});

  		//声明一个list
  		var list = {
  			"data": that.mapList
  		}

      list.data.forEach((myObj)=>{
        var myLngLat = new AMap.LngLat(myObj.x, myObj.y);
				var marker = new AMap.Marker({
					position: myLngLat,
					map: map
				});
        marker.content = '我是' + myObj.name;
  			marker.on('click',(function(obj){
          return function (e) {
            that.show(obj);
      		}
        })(myObj));
      })
  		map.setFitView(); //根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别


      /**
       * Created with WebStorm && Sublime Text 3
       * Date: 2015/10/29 14:04
       */
    	map.plugin(["AMap.ToolBar"], function() {
    		map.addControl(new AMap.ToolBar());
    	});
    	if(location.href.indexOf('&guide=1')!==-1){
    		map.setStatus({scrollWheel:false})
    	}
      console.log(8888)
    }
  }
}
</script>

<style lang="css">
  .map-main{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
  }
  .mydress{
    width: 0.3rem;
    height: 0.3rem;
    background: url(map-center.png);
    background-size: 100%;
    position: absolute;
    left:0.2rem;
    bottom:0.65rem;
    cursor: pointer;
  }
  .amap-touch-toolbar .amap-zoomcontrol {
    bottom: 0rem;
  }
  .amap-geolocation-con{
    right: auto !important;
    bottom:0.65rem !important;
    left: 0.2rem;
    opacity: 0;
  }
</style>
