<template>
  <body>
  	<nav>
      <div class="nav">
        <router-link to="/cty/selected"><span>精选</span></router-link>
        <router-link to="/cty/video"><span>视频</span></router-link>
        <router-link to="/cty/local"><span>本地</span></router-link>
        <router-link to="/cty/dogs"><span>狗狗</span></router-link>
        <router-link to="/cty/cats"><span>吸猫大会</span></router-link>
      </div>
      <div class="sarch">
        <div class="search" @click="search">
          <div class="magnifier"></div>搜索
        </div>
        <div class="forum" @click="forum"></div>
      </div>
    </nav>
    <router-view></router-view>
    <footer>
      <div class="navlist community"><img src="/static/image/index11.png" alt="">社区</div>
      <div class="navlist" @click="community"><img src="/static/image/index12.png" alt="">商城</div>
      <div class="navlist" @click="wiki"><img src="/static/image/index13.png" alt="">百科</div>
      <div class="navlist" @click="service"><img src="/static/image/index14.png" alt="">服务</div>
      <div class="navlist" @click="mine"><img src="/static/image/index15.png" alt="">我的</div>
    </footer>
  </body>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      search(){
        this.$router.push("/shop/search")
      },
      forum(){
        this.$router.push("/cty/forum")
      },
      community(){
        this.$router.push("/shop/shopindex")
      },
      wiki(){
        this.$router.push("/wiki")
      },
      service(){
        this.$router.push("/cty/service")
      },
      mine(){
        this.$router.push("/shop/home")
      }
    }
  }
</script>

<style lang="less">
  body{
    nav{
        position:fixed;
        top:0;
        z-index: 10;
        background-color: #fff;
        width:100%;
      .nav{
        padding:1vw 2vw;
        height:14vw;
        span{
          padding:0 1vw;
        }
      }
      .sarch{
        height:14vw;
        padding:0 2vw;
        .search{
          height:12vw;
          width:90%;
          border-radius: 5vw;
          background-color: #f6f6f6;
          line-height: 12vw;
          color:gray;
          float:left;
          .magnifier{
            width:6%;
            height:100%;
            background: url("/static/image/search.png") no-repeat center;
            background-size: contain;
            margin:0 4vw 0 2vw;
            float:left;
          }
        }
        .forum{
          width:8%;
          height:100%;
          float:right;
          background: url("/static/image/index0.png") no-repeat center;
            background-size: contain;
        }
      }
    }
    a{
      text-decoration: none;
      color:black;
    }
    .router-link-active{
      font-size:8vw;
      font-weight: bold;
    }
    footer{
      display: flex;
      justify-content: space-around;
      text-align: center;
      position:fixed;
      bottom:0;
      background-color: #fff;
      padding:2vw 0;
      width:100%;
      .navlist{
        width:10%;
        font-size:3.8vw;
        img{
          width:70%;
          display: block;
          margin:auto;
        }
      }
    }
  }
</style>
