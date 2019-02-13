<template lang="html">
  <div class="page2-box">
        <div class="title-b">
         <div class="title">
           <p>供应商</p>
           <p>分布图</p>
           </div>
         <p class="text">全国供应商：<span class="span-t">{{text}}</span></p>
    </div>
    <div id="container-info">
      <v-map :mapList="mapList" :pathName="pathName"></v-map>
    </div>
  </div>
</template>

<script>
import { supplierShowAPI } from '../../api/api';
import map from '@/components/map/map';
export default {
  components:{
    'v-map':map,
  },
  mounted(){
    this.dataLoad();
  },
  data(){
    return {
      mapList:[],
      pathName:'supplierDetails',
      text:''
    }
  },
  methods:{
    dataLoad(){
      supplierShowAPI({}).then((res)=>{
        console.log(res)
        this.text = res.detail.totalCount;
        let arr = res.detail.lists;
        let list = [];
        arr.forEach((n)=>{
          list.push({
    					"x": parseFloat(n.lng),
    					"y": parseFloat(n.lat),
    					"name": n.sname
    			});
        })
        this.mapList = list;
      });
    }
  }
}
</script>

<style lang="css" scoped>
  .title-b{
  width:86%;
  height:.4rem;
  display: flex;
  position: fixed;
  background:#fff;
  top:.1rem;
  left:7%;
  z-index:999;
  border-radius: .07rem;
  border:1px solid rgb(229,229,229);
  box-shadow:3px 3px 5px rgba(102,102,102,.05);
}
  .title{
      position: absolute;
      top:0;
      left:0;
  		width: 25%;
  		height: 0.4rem;
  		text-align: center;
  		font-size: 0.16rem;
      background: rgba(238,183,41,0.2);
      color: rgb(51,51,51);
      border-radius:0.06rem 0 0 .06rem;
      font-weight: 800;
  	}
    .title p{
      text-align: center;
      line-height: 1.2;
      margin-top:.005rem;
    }
    .text{
      flex:1;
      position: absolute;
      top:0;
      right:19%;
      line-height: .4rem;
      font-size: .16rem;
      color:#000;
    }
    .span-t{
     color: rgb(206,6,6);
     font-family: ArialMT;
    }
    #container-info{
      position: absolute;
      left: 0;
      right: 0;
      top:0;
      bottom:0rem;
    }
</style>
