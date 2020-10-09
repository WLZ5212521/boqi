<template>
  <body>
  	<nav>
      <div class="notice">
        通知：72小时不领取，水晶就会消失哦！
      </div>
      <div class="crystal">
        <div class="icon"></div>
        水晶0
      </div>
      <div class="promote">
        <div class="icon1"></div>
        提升算力0
      </div>
    </nav>
    <div class="img">
      <div class="baby">
        <img src="/static/image/index19.png" alt="">
        正在生长...
      </div>
    </div>

    <div class="box">
      <div class="small"><img src="/static/image/index20.png" alt="">提升算力</div>
      <div class="small"><img src="/static/image/index21.png" alt="">算力排行</div>
      <div class="small"><img src="/static/image/index22.png" alt="">我的钱包</div>
    </div>
    <br>
    <br>
    <br>
    <div class="none">
      <img src="/static/image/empty@2x.a775f7d.png" alt="">
      暂无数据~
    </div>

    <br>
    <br>
    <br>
  </body>
</template>

<script>
</script>

<style lang="less">
  body{
    background-color: #0d163a;
    padding:1vw 2vw;
    nav{
      .notice,.crystal,.promote{
        background-color: #16224f;
        height:8vw;
        line-height: 8vw;
        padding:0 2vw;
        border-radius:4vw;
        color:#b4a1f6;
        font-size:3.6vw;
        margin:0 0 3vw 0;
      }
        .icon{
          width:6vw;
          height:8vw;
          margin:0 1vw 0 0;
          background: url("/static/image/index19.png") no-repeat center;
          background-size: contain;
          float:left;
        }
      .icon1{
        width:4vw;
        height:6vw;
        margin:0 2vw 0 0;
        background: url("/static/image/index18.png") no-repeat center;
        background-size: contain;
        float:left;
      }
    }
    @keyframes move
    {
        0%
        {
            transform:translateY(0);
        }
       25%
        {
            transform:translateY(-1.5vw);
        }
       50%
        {
            transform:translateY(0vw);
        }
       75%
        {
            transform:translateY(1.5vw);
        }
       100%
        {
            transform:translateY(0);
        }
    }
    .img{
      width:100%;
      height:90vw;
      background: url("/static/image/bg_home.3e913eb.png") no-repeat center;
      background-size: contain;
      position:relative;
      .baby{
        width:20%;
        height:20%;
        color:#b4a1f6;
        font-size:3.6vw;
        position:absolute;
        top:34%;
        right:40%;
       animation:move 5s linear infinite;
        img{
          width:80%;
        }
      }
    }
    .box{
      display: flex;
      justify-content: space-around;
        background-color: #16224f;
        color:#b4a1f6;
        padding:2vw 4vw;
        border-radius:4vw;
      .small{
        width:20%;
        font-size:3.6vw;
        text-align: center;
        img{
          width:80%;
          display: block;
          margin:auto;
        }
      }
    }
    .none{
      width:80%;
      margin:auto;
      text-align: center;
        color:#b4a1f6;
      img{
        width:100%;
      }
    }
  }
</style>
