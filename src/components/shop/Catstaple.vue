<template>
  <body>
  	<img src="/static/image/FkwQDBa7IMcp0Y6dLDWCGi8a676M.jpg" alt="" width="100%">
    <ul class="ul">
    	<li v-for="img in imgs" class="li">
        <div class="img" :style="{background:img[0],backgroundSize:'contain',width:'100%',height:'50%'}">
          <div class="preferential">{{img[1]}}</div>
          <div class="shipping">{{img[2]}}</div>
        </div>
        <span>{{img[3]}}</span>
        <div class="price">
          <br>
          <br>
          <span class="red">{{img[4]}}</span>
          <s>{{img[5]}}</s>
          <img src="/static/image/cart2.png" alt="">
        </div>
      </li>
    </ul>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        imgs:[
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],
          ["url(/static/image/gouliang.jpg)","订阅特惠","包邮","【订阅】真挚zeal天然鲜牛奶蛋黄猫狗",'￥30.9',"￥55.2"],

        ]
      }
    }
  }
</script>

<style lang="less">
  body{
    .ul{
      padding:0;
      width:100%;
      height:120vw;
      .li{
        list-style-type:none;
        width:32%;
        height:66vw;
        margin:0 .4vw;
        float:left;
        .img{
          width:100%;
          height:50%;
          position:relative;
          .preferential{
            background-color: #ffc25f;
            color:#fff;
            font-size:3.4vw;
            padding:0 1vw;
            border-radius:0 10px 10px 0;
            position:absolute;
            left:2%;
            bottom:30%;
          }
          .shipping{
            background-color: #ffc25f;
            color:#fff;
            font-size:3.4vw;
            padding:0 1vw;
            border-radius:0 10px 10px 0;
            position:absolute;
            left:2%;
            bottom:14%;
          }
        }
        span{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .price{
          width:100%;
          padding:2vw 0 0 0;
          position:relative;
          .red{
            color:red;
            // float:left;
            width:60%;
          }
          s{
            color:gray;
          }
          img{
            display:block;
            width:30%;
            position:absolute;
            bottom:0;
            right:0;
          }
        }
      }
    }
  }
</style>
