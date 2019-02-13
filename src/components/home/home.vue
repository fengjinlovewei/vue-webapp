<template>
  <div class="home">
      <router-view/>
      <div class="bottom-clone"></div>
      <div class="footer">
          <router-link to="/home/page1">
              <div class="myShop">
                  <i></i>
                  <span>首页</span>
              </div>
          </router-link>
          <router-link to="/home/page2">
              <div class="classify">
                  <i></i>
                  <span>销售终端</span>
              </div>
          </router-link>
          <router-link to="/home/page3">
              <div class="shopCart">
                  <i></i>
                  <span>供应商</span>
              </div>
          </router-link>
          <router-link to="/home/page4">
              <div class="myCenter">
                  <i></i>
                  <span>关于CBD</span>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
@supports (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px)) {
      .footer {
          display: flex;
          width: 100%;
          height: 0.42rem;
          position: fixed;
          left: 0;
          bottom:0;
          background: rgba(255, 255, 255, 1);
          border-top: 0.005rem solid #e5e5e5;
          z-index: 999;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
      }
  }
  @supports not ((-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))) {
      .footer {
          display: flex;
          width: 100%;
          height: 0.42rem;
          position: fixed;
          left: 0;
          bottom:0;
          background: rgba(255, 255, 255, 1);
          border-top: 0.005rem solid #e5e5e5;
          z-index: 999;
      }
  }
  .footer a{
      flex:1;
      height: 100%;
      line-height: 0.42rem;
      text-align: center;
  }

  .footer i{
      display: block;
      height: 0.3rem;
  }
  .footer span{
      display: block;
      height: 0.16rem;
      line-height: 0.12rem;
      font-size: 0.1rem;
      color: #999;
      margin-top: -0.02rem;
  }
  .footer .active span{
      color: rgb(206,6,6);
  }
  .myShop i{
      background: url(page1-none.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .active .myShop i{
      background: url(page1.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .classify i{
      background: url(page2-none.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .active .classify i{
      background: url(page2.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .shopCart i{
      background: url(page3-none.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .active .shopCart i{
      background: url(page3.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .myCenter i{
      background: url(page4-none.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
  .active .myCenter i{
      background: url(page4.png) no-repeat;
      background-size: 0.2rem 0.2rem;
      background-position: center 0.06rem;
  }
</style>
