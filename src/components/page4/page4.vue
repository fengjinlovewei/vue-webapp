<template lang="html">
  <div class="guanyu">
  <div class="titles">
			<div class="fanhui" @click="goBlack"><i></i></div>
			关于CBD
		</div>
		<div class="con" ref="loadImg" load>
			<div class="line-h"></div>
			<p class="supname">公司介绍</p>
			<p class="comdetail">365CBD为推进企业由“新零售”企业向“智慧供应链”企业转变，通过重构产业价值链，推进365“新零售、新地产、新金融、新投资”四大业务板块向平台型供应链生态体系集聚转型，具有完善的零售业态体系。</p>
      <div class="supimg">
					<img :src="item.url" v-for="item in firm" class="imgs">
			</div>
			<div class="code">
				<div class="code-left">
					<div class="top-line"></div>
           <a href="http://www.365cbd.cn" class="a-d">365CBD官网</a>
					 <a href="http://www.365cbd.com" class="a-b">365CBD商城</a>
				</div>
				<div class="code-right">
       <p> <img :data-src="link.left"></p>
				<p><img :data-src="link.right"></p>
				</div>
			</div>
		</div>
		<div class="backwrite"></div>
	</div>
</template>

<script>
export default {
  data(){
    return {
      firm:[
        {url:require('@/assets/guanyu1.png')},
        {url:require('@/assets/guanyu2.png')}
			],
      link:{
        left:require('@/assets/gw.png'),
        right:require('@/assets/sc.png')
      }
    }
  },
  mounted(){
		this.loadImg(this.$refs.loadImg);
	},
	methods:{
		// goBlack(){
    //   this.$router.go(-1);
		// },
	}
}
</script>

<style lang="css" scoped>
.guanyu{
	width:100%;
	height:auto;
	overflow-y: scroll;
}
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
.fanhui{
	position: absolute;
  top:0;
	left: 0;
}
.fanhui i{
  display: block;
	width: 0.5rem;
  height: 0.35rem;
  /* background:url('../../common/image/back.png') no-repeat; */
  background-size: auto 0.16rem;
  background-position: 0.1rem center;
}
	.con{
		margin: auto;
    padding-top: 0.35rem;
	}
	.supname{
	  color: rgb(51,51,51);
		line-height: 0.4rem;
		font-size: 0.14rem;
		text-align: center;
	}
	.comdetail{
		font-size: .12rem;
		text-indent: 0.2rem;
		padding: 0 .1rem;
		text-align: justify;
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
	.code{
		width:3rem;
		margin-top:.17rem;
		margin-left:.1rem;
		background: rgb(238,238,238);
		padding-top:.13rem;
		padding-bottom:.2rem;
		border-radius: .07rem;
	}
   .code-left{
    width:100%;
		height:auto;
		display: flex;
		text-align: center;
		position: relative;
	 }
	 .a-d{
		 margin-left:.15rem;
	 }
	 .a-b{
		 margin-right:.15rem;
	 }
	 .code-left a{
		 	 width: 50%;
			 color:rgb(206,6,6);
			 font-size: .16rem;
	 }
	 .code-right{
		background:#fff;
    width:2.6rem;
		height:auto;
		display: flex;
		margin-left:.2rem;
		text-align: center;
		margin-top:.07rem;
		padding: .13rem 0;
	 }
	 .code-right p{
		 	width: 50%;
			text-align: center;
	 }
	 .top-line{
      width:1px;
			height:.15rem;
			background:rgb(51,51,51);
			position: absolute;
			left:50%;
			top:.05rem;
	 }
	.line-h{
		 width:100%;
     height:.1rem;
     background: rgb(238,238,238);
	}
	.backwrite{
		width:100%;
		height:.45rem;
		background:#fff;
	}
</style>
