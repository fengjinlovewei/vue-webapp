

export default {
  install(Vue,options)
  {
    Vue.prototype.offset= function(target){
      let top = 0,
          left = 0
      while(target.offsetParent) {
          top += target.offsetTop
          left += target.offsetLeft
          target = target.offsetParent
      }
      return {
          top: top,
          left: left
      }
    };
    Vue.prototype.loadImg = function (dom){
      if(!dom){
        return false;
      }
      let boxH =  dom.clientHeight;
      let boxT = this.offset(dom).top;
      let img = document.getElementsByTagName('img');
      let imgB = Array.prototype.slice.call(img);
      let imgA =[];
      let n = 0;
      imgB.forEach((v)=>{
          if(v.getAttribute('data-src')){
              v.os = this.offset(v);
              v.onload = function(){
                  this.removeAttribute('data-src');
              }
              imgA.push(v);
          }
      });
      let load = function(){
        if(imgA.length!=n){
            let move = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
            imgA.forEach((v,i)=>{
              if(!v.stop){
                  let imgH = v.os.top;
                  if ((boxT+move)<=imgH+100&& imgH-100<= (boxH + boxT +move)) {
                      let src = v.getAttribute('data-src');
                      v.setAttribute('src',src);
                      v.stop = true;
                      n++;
                  }
              }
          })
        }
      };
      document.onscroll = function(){
        load();
      }
      load();
      console.log(boxH,boxT,img,imgB,imgA)
    }
    Vue.prototype.goScroll = function (option){
        let dom = document.getElementsByClassName(option)[0];
        let height = this.offset(dom).top;
        console.log(option,height)
        const ScrollTop = (number = 0, time) => {
          if (!time) {
              document.body.scrollTop = document.documentElement.scrollTop = number;
              return number;
          }
          const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
          let spacingInex = time / spacingTime; // 计算循环的次数
          let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
          let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
          let scrollTimer = setInterval(() => {
              if (spacingInex > 0) {
                  spacingInex--;
                  ScrollTop(nowTop += everTop);
              } else {
                  clearInterval(scrollTimer); // 清除计时器
              }
          }, spacingTime);
      };
      ScrollTop(height,200);
    };
    Vue.prototype.loadJs = function(url,callback){
        var script=document.createElement('script');
        script.type="text/javascript";
        if(typeof(callback)!="undefined"){
            if(script.readyState){
              script.onreadystatechange=function(){
                if(script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
              }
            }else{
              script.onload=function(){
                callback();
              }
            }
        }
        script.src = url;
        document.body.appendChild(script);
    }
  }
}
