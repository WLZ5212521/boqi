<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <router-link to="/shop/register"><div class="register">登录</div></router-link>
      <div class="text">新用户注册</div>
    </nav>
    <br>
    <br>
    <br>  
    <br>
    <form action="">
      <input type="tel" placeholder="手机号"><br>
      <input type="password" placeholder="6~20位密码,数字或字母"><br>
      <input type="text" placeholder="图形验证码"><br>
      <input type="text" placeholder="输入验证码">
    </form>
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
        this.$router.push("/shop/user")
      }
    }
  }
</script>

<style lang="less">
  body{
    width:96%;
    margin:auto;
    nav{
      width:100%;
      height:10vw;
      border-bottom:1px solid gray;
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
        font-size: 4.5vw;
      }
      .register{
        color:black;
        text-decoration: none;
        height:10vw;
        line-height: 10vw;
        float:right;
      }
    }
  }
</style>
