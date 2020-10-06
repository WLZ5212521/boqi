<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">个人资料</div>
    </nav>
    <section>
      <div class="img">
        头像
        <div class="headimg"></div>
      </div>
      <div>
        账号
        <span class="other">13333333333</span>
      </div>
      <div>
        昵称
        <span class="other">boqi8854834 ></span>
      </div>
      <div>
        性别
        <span class="other">女 ></span>
      </div>
      <div>
        生日
        <span class="other">></span>
      </div>
      <div>
        城市
        <span class="other">></span>
      </div>
      <div>
        简介
        <span class="other">></span>
      </div>
      <div>
        我的收货地址
        <span class="other">修改 ></span>
      </div>
      <div>
        我的发票信息
        <span class="other">修改 ></span>
      </div>
      <div>
        我的实名认证
        <span class="other">未认证 ></span>
      </div>

    </section>
    <div class="btn" @click="btn">退出当前账号</div>
    <br>
    <br>
    <br>
    <br>
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
        this.$router.push("/shop/home")
      },
      btn(){
        this.$store.commit('reduce')
        this.$router.push("/shop/user")
      }
    }
  }
</script>

<style lang="less">
  body{
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
    section{
      .img{
        height:30vw;
        line-height: 30vw;
        .headimg{
          height:100%;
          width:20%;
          background:url("/static/image/none1.png") no-repeat center;
          background-size: contain;
          float:right;
        }
      }
      div{
        height:15vw;
        padding:0 2vw;
        line-height: 15vw;
        font-size:3.8vw;
        border-bottom:1px solid gray;
        .other{
          display: block;
          float:right;
          color:gray;
        }
      }
    }
    .btn{
      width:90%;
      height:10vw;
      line-height: 10vw;
      text-align: center;
      color:#fff;
      font-size:5vw;
      background-color: orangered;
      border-radius:5px;
      margin:3vw auto;
    }
  }
</style>
