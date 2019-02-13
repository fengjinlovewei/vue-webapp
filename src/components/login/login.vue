<template lang="html">
  <div class="login-box">
		<div class="logo">
			<img src="../../assets/logo.png">
		</div>
		<div class="logo-reg" @click="inputFocus">
      <p>请输入验证码</p>
      <div class="yzm-box" clear>
        <span>{{valueArr[0]}}</span>
        <span>{{valueArr[1]}}</span>
        <span>{{valueArr[2]}}</span>
        <span>{{valueArr[3]}}</span>
      </div>
			<input type="tel" v-model="value" placeholder="请输入验证码"  ref="input">
		</div>
    <button type="button" @click="login" id="lodinBtn"> 确认</button>
  </div>
</template>

<script>
export default {
    methods:{
      login(){
          if(this.value == '0110'){
            this.$router.push({ path: '/home/page1', query: {}});
          }else{
            this.value = '';
            alert('密码错误')
          }
      },
      inputFocus(){
        this.$refs.input.focus();
      }
    },
    mounted(){
      if ((/Android/gi).test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' ||
                document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        });
      }
    },
    watch:{
      value(newVal,oldVal){
        if(newVal.length > this.valueArr.length){
          this.value = oldVal;
          return false;
        }
        for(let i = 0;i < this.valueArr.length;i++){
          this.valueArr[i] = newVal[i] === undefined?'':newVal[i];
        }
      }
    },
    data(){
      return {
        value:'',
        valueArr:['','','',''],
      }
    }
}
</script>

<style lang="css">
  .login-box{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: url('../../assets/login-bg.png') no-repeat;
    background-size: 100% auto;
    background-position: 0 -0.2rem;
  }
	.logo{
		width: 100%;
		margin-top: 1rem;
    text-align: center;
	}
	.logo img{
		width: 72%;
    margin-left: -0.05rem;
	}
	.logo-reg{
		margin: auto;
		width: 2.525rem;
		margin-top: 0.4rem;
    padding-left: 0.1rem;
    position: relative;
    cursor: pointer;
	}
	.logo-reg input{
    position: absolute;
    top:0;
    left: 0;
    display: block;
    width: 1px;
    height: 1px;
    background: none;
    opacity: 0;
	}
  .yzm-box{
    position: relative;
    padding: 0.15rem 0 0.05rem 0;
    left:-0.05rem
  }
  .yzm-box span{
    display: block;
    float: left;
    width: 0.55rem;
    height: 0.25rem;
    line-height: 0.25rem;
    text-align: center;
    border-bottom: 0.005rem solid #CE0607;
    margin-right: 0.1rem;
    font-size: 0.18rem;
  }
  .yzm-box span:nth-child(4){
    margin-right: 0rem;
  }
	#lodinBtn{
		width: 2.725rem;
		display: block;
		margin:0 auto;
		line-height: 0.375rem;
		color: #fff;
		background: #CE0607;
		border-radius: .07rem;
		margin-top: 0.2rem;
		font-size: 0.16rem;
	}
</style>
