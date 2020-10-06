<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">商品分类</div>
      <div class="box">
        <el-menu class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1" @click="dog">狗狗 </el-menu-item>
          <el-menu-item index="2" @click="cat">猫猫 </el-menu-item>
          <el-menu-item index="3" @click="pet">小宠 </el-menu-item>
          <el-menu-item index="4" @click="aquarium">水族 </el-menu-item>
        </el-menu>
      </div>
    </nav>
    <router-view></router-view>
  </body>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      dog(){
        this.$router.push("/shop/dog")
      },
      cat(){
        this.$router.push("/shop/cat")
      },
      pet(){
        this.$router.push("/shop/pet")
      },
      aquarium(){
        this.$router.push("/shop/aquarium")
      },
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    nav{
      width:100%;
      height:10vw;
      border-bottom:1px solid gray;
      position:fixed;
      top:0;
      z-index:10;
      .box{
        border-top:1px solid black;
        width:100%;
        .el-menu{
          display:flex;
          justify-content: space-between;
        }
      }
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .text{
        width:60%;
        height:10vw;
        margin:auto;
        text-align: center;
        line-height: 10vw;
        font-size: 4vw;
      }
    }
  }
</style>
