<template>
  <body>
  	<img src="/static/image/banner.e3aacb02.jpg" alt="" width="100%">
    <div class="box">
      <img src="/static/image/index1.png">
      <div class="list">
        <ul>
        	<li v-for="img in imgs">
            <img :src="img[0]" alt="" width="100%">
            {{img[1]}}
          </li>
        </ul>
      </div>
      <div class="frame"></div>
      <div class="luck">还有--次抽奖机会！</div>
    </div>
    <div class="record">
      <div class="text">每次抽奖必中奖</div>
      <div class="records"></div>
      <div class="friend"></div>
      <div class="ps">本活动所有奖品与苹果公司无关</div>
    </div>
  </body>
</template>
<script>
  export default{
    data(){
      return{
        imgs:[
          ["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","玩具套装"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],
          ["/static/image/shop1600693077_y.png","随机红包"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],
          ["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],
          ["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","地狱厨房湿粮"],["/static/image/shop1600693077_y.png","谢谢参与"],
        ]
      }
    }
  }
</script>

<style lang="less">
  body{
    .box{
      width:100%;
      height:102vw;
      background: url("/static/image/index.png") no-repeat center;
      background-size:contain;
      position:relative;
      img{
        display:block;
        padding:4vw 0 0 0;
        width:80%;
        margin:auto;
      }
      .list{
        width:90%;
        height:70%;
        margin:auto;
        border:1px solid red;
        ul{
          margin:0;
          padding:0;
          li{
            width:24%;
            height:32%;
            font-size:3vw;
            color:#fff;
            text-align: center;
            background-color: #6c31e3;
            list-style-type: none;
            float:left;
            border-radius:10px;
            margin:.4vw;
          }
        }

      }
      .frame{
        width:50%;
        height:20vw;
        background: url("/static/image/draw.96bc70b6.png") no-repeat center;
        background-size: contain;
        margin:2vw 0 0 2vw;
        float:left;
      }
      .luck{
        width:33%;
        height:20vw;
        background: url("/static/image/index2.png") no-repeat bottom;
        background-size: contain;
        margin:5vw 5vw 0 0;
        color:#fff;
        float:right;
      }
    }
    .record{
      width:100%;
      height:40vw;
      background-color: #22007c;
      padding:2vw;
      .text{
        color:#fff;
        text-align: center;
      }
      .records{
        width:33%;
        height:20vw;
        background: url("/static/image/index3.png") no-repeat bottom;
        background-size: contain;
         float:left;
         margin:2vw 2vw 2vw 6vw;
      }
      .friend{
        width:33%;
        height:20vw;
        background: url("/static/image/index4.png") no-repeat bottom;
        background-size: contain;
        float:right;
         margin:2vw 6vw 2vw 2vw;
      }
      .ps{
        color:#fff;
        text-align: center;
        float:left;
        width:100%;
      }
    }
  }
</style>
