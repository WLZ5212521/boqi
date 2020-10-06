<template>
  <body>
  	<nav>
      <img src="/static/image/FuZ8xC1-4TysvPkUG4pVlU3tDVf9.jpg" width="100%">
    </nav>
    <ul>
    	<li v-for="img in imgs">
        <div class="img" :style="{background:img[0],backgroundSize:'contain'}"></div>
        <div class="text">{{img[2]}}</div>
        <span>{{img[1]}}</span>
        <br>
        <div class="price">
          {{img[4]}} <br>
          <span>{{img[3]}}</span>
        </div>
        <div class="launch">发起砍价</div>
      </li>
    </ul>
    <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
  </body>
</template>

<script>
  export default{
    data(){
      return{
        imgs:[
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
          ["url(/static/image/nationalday.png) no-repeat center","随机砍","扫码进群，玩转砍价&拼团","正价：￥100.0限量100","低价￥0.0"],
        ],
        scrollTop: 0,
        btnFlag:false,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop,true);
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
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
    }
  }
</script>

<style lang="less">
  body{
    ul{
      padding:0;
      li{
        width:100%;
        height:40vw;
        list-style-type:none;
        position:relative;
        .img{
          width:35%;
          height:100%;
          float:left;
        }
        .text{
          color:#595959;
          font-size:3.8vw;
        }
        span{
          color:#e1310e;
          background-color: #ff896c;
          font-size:3.8vw;
        }
        .price{
          color:red;
          font-size:4.4vw;
          position:absolute;
          bottom:0;
          left:35%;
          span{
            color:gray;
            font-size:3.3vw;
            background-color: #fff;
          }
        }
        .launch{
          position:absolute;
          bottom:0;
          right:5%;
          padding:1vw 2vw;
          background-color: #ff2720;
          color:#fff;
          border-radius:20px;
          font-size:4.8vw;
        }
      }
    }
    .go-top{
      position:fixed;
      bottom:2rem;
      right:2rem;
    }
  }
</style>
