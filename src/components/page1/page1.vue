<template lang="html">
  <div class="shouye-box" ref="loadImg" load>
		<div class="xiao" v-for="(item,i) in list">
			<h3>{{item.title}}</h3>
      <img :data-src="item.url" @click="goPage(i)">
		</div>
		<div class="lineback"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
					list:[
						{title:'小B分布图',url:require('@/assets/shouye1.jpg'),path:'page2'},
						{title:'供应商分布图',url:require('@/assets/shouye2.jpg'),path:'page3'},
						{title:'公司介绍',url:require('@/assets/shouye3.jpg'),path:'page4'}
					]
        }
      },
      mounted(){
        this.loadImg(this.$refs.loadImg);
      },
      methods: {
      	goPage(i){
          let path = this.list[i].path;
      		this.$router.push({ path: '/home/'+path,name:path, params: {}})
      	}
      },
}
</script>
<style lang="css">
	.shouye-box{
		width: 100%;
	}
	.xiao{
		width: 100%;
		height:auto;
	}
	.xiao h3{
		width: 100%;
		height: .3rem;
		line-height: 2.3;
		text-align: center;
		font-weight: 400;
		font-size: 0.14rem;
	}
	.xiao>img{
		width: 3rem;
		height:1.23rem;
    display: block;
    margin: 0 auto;
	}
  .lineback{
		width:100%;
		height:.45rem;
		background:#fff;
	}
</style>
