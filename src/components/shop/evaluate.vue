<template>
  <body>
    <div class="nav">
      <router-link to="/shop/all"><div class="all" >全部({{json.data.allnum}})</div></router-link>
      <router-link to="/shop/chart"><div class="chart" >有图({{json.data.chart}})</div></router-link>
      <router-link to="/shop/better"><div class="good">好评({{json.data.goodnum}})</div></router-link>
      <router-link to="/shop/middles"><div class="middle">中评({{json.data.middle}})</div></router-link>
      <router-link to="/shop/bad"><div class="bad">差评({{json.data.badnum}})</div></router-link>
    </div>
    <router-view></router-view>
  </body>
</template>

<script>
  import json from '../../../static/good.js'
  export default{
    data(){
      return{
         json:json,
      }
    },
  }
</script>

<style lang="less">
  body{
    .nav{
      margin:12vw 2vw 0 2vw;
      display:flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: #f5f5f9;
      .all,.chart,.good,.middle,.bad{
        border:1px solid #c5c5c5;
        border-radius:10px;
        padding:0 2vw;
        text-decoration: none;
        }
        .router-link-active{
          background-color: red;
          border-radius:10px;
          color:#fff;
          box-sizing: border-box;
      }
    }
    a{
      text-decoration: none;
        color:gray;
    }

  }
</style>
