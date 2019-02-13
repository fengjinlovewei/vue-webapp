<template lang="html">
  <div class="home">
    <div class="titles">
			<div class="fanhui" @click="goBlack"><i></i></div>
			供应商详情页
		</div>
		<div class="con">
      <div class="backcolor"></div>
			<div class="supname" id="supname">{{nickname}}</div>
			<div class="supdeta">
      <div class="line-d">
             <div class="line"></div>
				<p class="supname colc">经营情况</p>
      </div>
				<div class="deta-vox">
					<span>日均订单量(单)：</span>
					<span><em class="blue">{{daycount}}</em></span>
				</div>
				<div class="deta-vox">
					<span>日均销售额(元)：</span>
					<span><em class="blue">{{daymanay}}</em></span>
				</div>
				<div class="deta-vox" id="deta-vox">
					<span>累计销售额(元)：</span>
					<span><em class="blue">{{totalmoney}}</em></span>
				</div>
        <div class="backcolor"></div>
        <div class="line-c">
          <div class="lines"></div>
				<p class="supname colc jieshao" id="jieshao">店铺介绍</p>
        </div>
				<p class="comdetail">{{supplierdesc}}</p>
				<!-- <div class="supimg" ref="loadImg" load>
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in images">
                  <img :data-src="item.imageurl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div> -->
        <div class="supimg">
					<img :src="item.imageurl" v-for="item in images" class="imgs">
			</div>
      <div class="dizhi">
				<p class="comdetail" id="bottom">地址 : {{address}}</p>
      </div>
			</div>
		</div>
  </div>
</template>

<script>
// import Swiper from 'swiper/dist/js/swiper.min.js';
// import 'swiper/dist/css/swiper.min.css';
import { supplierDetailsAPI } from '../../api/api';
export default {
  created(){
    let lng = this.$route.query.x;
    let lat = this.$route.query.y;
    this.dataLoad(lng,lat);
  },
  data(){
    return {
      nickname:'',
      daycount:0, //日订单量
      daymanay:0,//日订单量总和
      totalmoney:0,//累计销售额
      address:'',//地址
      supplierdesc:'',
      images:[]
    }

  },
  mounted(){
    console.log(this.$route.query)
  },
  methods:{
    dataLoad(lng,lat){
      console.log(lng,lat)
      supplierDetailsAPI({lng:lng,lat:lat}).then((res)=>{
        console.log(res)
        this.nickname = res.detail.nickname;
        this.daycount = res.detail.daycount;
        this.daymanay = res.detail.daymanay;
        this.totalmoney = res.detail.totalmoney;
        this.address = res.detail.address;
        this.images =  res.detail.list;
        this.supplierdesc = res.detail.supplierdesc;
        this.$nextTick(()=>{
          this.loadImg(this.$refs.loadImg);
          // new Swiper('.swiper-container', {
          //   speed:700,
          //   autoplay: true,
          //   loop: true,
          //   pagination: {
          //     el: '.swiper-pagination',
          //     clickable :true
          //   }
          // });
        });
      });
    },
    goBlack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
.titles{
  width: 100%;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  font-size: 0.166rem;
  position: fixed;
  top:0;
  left: 0;
  background:#fff;
  color: rgb(51,51,51);
  z-index: 9999;
}
.con{
  width: 100%;
  margin: auto;
  padding-top: 0.35rem;
 
}
.comdetail{
  padding:0 .1rem;
  text-indent: 2em;
  text-align: justify;
}
.fanhui{
	position: absolute;
  top:0;
	left: 0;
}
.fanhui i{
  display: block;
	width: 0.5rem;
  height: 0.35rem;
  background:url('../../common/image/back.png') no-repeat;
  background-size: auto 0.16rem;
  background-position: 0.1rem center;
}
.supname{
	line-height: 0.325rem;
	font-size: 0.14rem;
  padding-left:.1rem;
  font-size: .16rem;
  color:rgb(51,51,51);
}
#supname{
  padding-top:.1rem;
}
.backcolor{
  width:100%;
  height:.1rem;
  background: rgb(238,238,238);
}
.colc{
	color: rgb(51,51,51);
  padding-left:.22rem;
}
.line-d{
  position: relative;
}
.line{
  position: absolute;
  left:.1rem;
  bottom:.094rem;
  width:.04rem;
  height:.15rem;
  line-height: .15rem;
  background: rgb(206,6,6);
}
#deta-vox{
  padding-bottom:.15rem;
}
.jieshao{
  margin-top:.1rem;
}
.line-c{
  position: relative;
}
.lines{
  position: absolute;
  left:.1rem;
  bottom:.087rem;
  width:.04rem;
  height:.15rem;
  line-height: .15rem;
  background: rgb(206,6,6);
}
.deta-vox{
  padding-bottom:.04rem;
  margin-left:.15rem;
}
.deta-vox span{
  color:rgb(51,51,51);
}
.blue{
  color: rgb(206,6,6);
}
.supimg{
		height:1.5rem;
		overflow-y: hidden;
		overflow-x: auto;
		white-space:nowrap;
   	margin-top:.13rem;
	  -webkit-overflow-scrolling: touch;
	}
	.supimg::-webkit-scrollbar {
       display: none;
     }
	.supimg img{
    width:2.8rem;
		height:1.5rem;
	  margin-left:.1rem;
		margin-bottom: 0.1rem;
	}
	.suping img::-webkit-scrollbar {
       display: none;
     }
	.imgs{
		margin-right:.1rem;
	}
	.supimg img:nth-child(2){
		margin-left:0;
	}
  .supimg img:nth-child(3){
		margin-left:0;
	}
.supdeta{
  padding-bottom: 0.3rem;
}
.dizhi{
  width:100%;
  height:.35rem;
  line-height: .35rem;
  display: flex;
}
#bottom{
 text-indent: 0;
 margin-top:.06rem;
 font-size: .14rem;
 line-height: 1.5;
 text-align: justify;
}
</style>
