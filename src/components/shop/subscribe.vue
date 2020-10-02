<template>
<body>
  <nav>
    <div class="box">
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="free">首月免单 </el-menu-item>
        <el-menu-item index="2" @click="Dogstaple">狗狗主粮 </el-menu-item>
        <el-menu-item index="3" @click="Catstaple">猫咪主粮 </el-menu-item>
        <el-menu-item index="4" @click="snacks">尖货零食 </el-menu-item>
        <el-menu-item index="5" @click="repellent">驱虫日用</el-menu-item>
      </el-menu>
    </div>

    <div class="img">
      <wc-swiper class="swiper">
        <wc-slide v-for="item in items" >
          <img :src="item" width="100%">
        </wc-slide>
      </wc-swiper>
    </div>
    <ul>
      <li><img src="/static/image/FlL67VtMPiX7st1oKwi6KdKrnp_P.jpg" alt=""></li>
      <li><img src="/static/image/Fr4t1TUhfEbWmic9Qwoo36djF_AG.jpg" alt=""></li>
      <li><img src="/static/image/Fp_799AdJSVh0VdyDv4yUyk4cajz.jpg" alt=""></li>
      <li><img src="/static/image/FuMXpqVpsNds9mp9zAMLq5uNp4HR.jpg" alt=""></li>
      <li><img src="/static/image/FkP_7I-12IJVUuQ22xzsZUuoFr4E.jpg" alt=""></li>
    </ul>
  </nav>
    <img src="/static/image/FlbeqKXoKjYai4VADee4jdfYpk-Q.jpg" alt="" width="100%">
    <img :src="url" alt="" width="100%" @click="img">
    <router-view></router-view>

</body>
</template>

<script>
  export default{
    data(){
      return{
        items:["/static/image/Ftr766DqkHKNyAktDbFnOI6y8MKV.jpg","/static/image/FoD8Pt4vhu9xto6_rSxya7eUcxN6.jpg",
          "/static/image/Fi7-tzbY5QI-JN9bPqRUQUAriu6j.jpg","/static/image/FlGxnQWcxOIErL5oXH_nuPamzSAP.jpg",],
        url:"/static/image/FmLe1GVpYDBgpq7a48Xz3Lt2vtxc.jpg"
      }
    },
    methods:{
      img(){
        this.url="/static/image/FhP3JSAuPiPrYd-2-fDFZVkHPp38.jpg"
      },
      free(){
        this.$router.push("/shop/subscribe")
      },
      Dogstaple(){
        this.$router.push("/shop/Dogstaple")
      },
      Catstaple(){
        this.$router.push("/shop/Catstaple")
      },
      snacks(){
        this.$router.push("/shop/snacks")
      },
      repellent(){
        this.$router.push("/shop/repellent")
      },
    }
  }
</script>

<style lang="less">
  body{
    nav{
      .box{
        position:fixed;
        top:0;
        width:100%;
        z-index:10;
      }
      .el-menu-item{
        text-align: center;
        width:20%;
        padding:0;
      }
      ul{
        padding:0;
        margin:0;
        li{
          list-style-type:none;
          width:20%;
          float:left;
          img{
            width:100%;
          }
        }
      }
    }
  }
</style>
