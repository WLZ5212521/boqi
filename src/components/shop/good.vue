<template>
  <body>
  	<nav>
  	  <div class="back" @click="goback"></div>
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="goods">商品</el-menu-item>
        <el-menu-item index="2" @click="details">详情</el-menu-item>
        <el-menu-item index="3" @click="evaluate">评价</el-menu-item>
      </el-menu>
  	</nav>
    <router-view></router-view>
    <div class="footer">
      <div class="Shopping"><img src="/static/image/Shopping.png" alt="">购物车</div>
      <div class="join">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
    <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
    <router-link to="/shop/shopindex"><img src="/static/image/home.svg" alt="" width="10%" class="home"></router-link>
  </body>
</template>

<script>
  import json from '../../../static/good.js'
  export default{
    data(){
      return{
        json:json,
        activeName: 'second',
        scrollTop: 0,
        btnFlag:false,
      }
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      goods(){
        this.$router.push('/shop/goods')
      },
      details(){
        this.$router.push('/shop/details')
      },
      evaluate(){
        this.$router.push('/shop/evaluate')
      },
      backTop () {
          const that = this
          let timer = setInterval(() => {
            let ispeed = Math.floor(-that.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
            if (that.scrollTop === 0) {
              clearInterval(timer)
            }
          }, 16)
      },
      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop () {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 60) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop,true);
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    nav{
      width:100%;
      height:10vw;
      position:fixed;
      top:0;
      z-index: 10;
      background-color: #fff;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .el-menu{
        width:70%;
        height:100%;
        margin:auto;
        display:flex;
        justify-content: space-around;
        .el-menu-item{
          height:100%;
          line-height: 10vw;
          }
      }
    }
    .footer{
      display:flex;
      justify-content: flex-start;
      height:14vw;
      text-align: center;
      position:fixed;
      bottom:0;
      width:100%;
      .Shopping{
        width:20%;
        height:100%;
        background-color: #fff;
        img{
          width:40%;
          display:block;
          margin:.5vw auto;
        }
      }
      .join{
        background-color: #fea91f;
        line-height: 14vw;
        width:40%;
        color:#fff;
      }
      .buy{
        background-color: #fc4a00;
        line-height: 14vw;
        width:40%;
        color:#fff;
      }
    }
    .go-top{
      position:fixed;
      bottom:16vw;
      right:3vw;
    }
    .home{
      position:fixed;
      bottom:16vw;
      left:3vw;
    }
  }
</style>
