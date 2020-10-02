<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">找回密码</div>
    </nav>
    <br><br>
    <input type="text" v-model="num" placeholder="手机号">
    <button @click="login">注册并登录</button>
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
      },
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
    }
    input{
      width:70%;
      height:5vw;
      border:1px solid transparent;
      padding:.5rem;
    }
  }
</style>
