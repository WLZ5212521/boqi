<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">我的波奇</div>
    </nav>
    <div class="user" @click="user">
      <div class="userimg"></div>
      boqi8853534
    </div>
    <div class="vip" @click="vip">
      <div class="vipimg"></div>
      <div class="viptext">
        <b>充值送现金</b>
        尊享10大权益
      </div>
    </div>
    <img src="/static/image/9958139b464a6675cf070fdd3926edb2.jpg" alt="" width="100%" @click="wares">
    <div class="shops" @click="shops">
      <b>商城订单</b>
      查看全部商城订单>
    </div>
    <div class="order" @click="shops">
      <div><img src="/static/image/80a63a04.icon_order.png" alt="">待付款</div>
      <div><img src="/static/image/dea93b31.daifahuo.png" alt="">待发货</div>
      <div><img src="/static/image/f40452e7.icon_order2.png" alt="">待收货</div>
      <div><img src="/static/image/62e5594e.icon_order3.png" alt="">待评价</div>
    </div>
    <div class="service" @click="shops">
      <b>服务订单</b>
      查看全部服务订单>
    </div>
    <div class="services" @click="shops">
      <div><img src="/static/image/80a63a04.icon_order.png" alt="">待付款</div>
      <div><img src="/static/image/48cc2e6b.icon_order5.png" alt="">待使用</div>
      <div><img src="/static/image/62e5594e.icon_order3.png" alt="">待评价</div>
      <div><img src="/static/image/00aa909e.icon_order4.png" alt="">已完成</div>
    </div>
    <br>
    <div class="other">
      <div><img src="/static/image/7e8cedfd.user_icon.png" alt="">我的账户</div>
      <div><img src="/static/image/e7debd91.coupon_icon.png" alt="">我的优惠券</div>
      <div><img src="/static/image/69bda424.prize_icon.png" alt="">兑奖中心</div>
      <div><img src="/static/image/8ace0f5b.collect_icon.png" alt="">我的收藏</div>
      <div><img src="/static/image/f42e93ff.card.png" alt="">服务会员卡</div>
      <div><img src="/static/image/3b727d2b.quan.png" alt="">我的券包</div>
      <div><img src="/static/image/a4d744d2.cart.png" alt="">购物车</div>
      <div><img src="/static/image/3258d001.foot.png" alt="">我的足迹</div>
      <div><img src="/static/image/b7c37dcb.icon-red.png" alt="">我的红包</div>
      <div><img src="/static/image/card.png" alt="">礼品卡</div>
      <div><img src="/static/image/donate-icon.png" alt="">公益</div>
    </div>
    <br>
    <br>
    <br>
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
        this.$router.push("/shop/shopindex")
      },
      user(){
        this.$router.push("/shop/personal")
      },
      vip(){
        this.$router.push("/shop/vip")
      },
      wares(){
        this.$router.push("/shop/wares")
      },
      shops(){
        this.$router.push("/shop/shops")
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
    .user{
      height:24vw;
      line-height: 24vw;
      padding:0 2vw;
      .userimg{
        width:20%;
        height:100%;
        background:url("/static/image/none1.png") no-repeat center;
        background-size: contain;
        float:left;
        margin:0 2vw;
      }
    }
    .vip{
      height:20vw;
      margin:0 2vw;
      background:url("/static/image/fc2f2927.Rectangleblack@3x.png") no-repeat center;
      background-size: contain;
      position:relative;
      .vipimg{
        width:10%;
        height:40%;
        background:url("/static/image/b543a326.black@3x.png") no-repeat center;
        background-size: contain;
        position:absolute;
        top:30%;
        left:10%;
      }
      .viptext{
        position:absolute;
        top:25%;
        left:20%;
        color:#eddbb3;
        font-size:3.6vw;
        b{
          display:block;
        }
      }
    }
    .shops,.service{
      height:12vw;
      line-height: 12vw;
      margin:2vw 0 0 0;
      text-align: right;
      font-size:3.8vw;
      border-top:1px solid #c2c2c2;
      border-bottom:1px solid #c2c2c2;
      padding:0 2vw;
      b{
        display:inline-block;
        float:left;
      }
    }
    .order,.services,.other{
      display:flex;
      justify-content: space-around;
      text-align: center;
      font-size:3.8vw;
      padding:0 0 1vw 0;
      border-bottom:1px solid #c2c2c2;
      div{
        width:14%;

        img{
          width:100%;
        }
      }
    }
    .other{
      justify-content: flex-start;
      flex-wrap: wrap;
      padding:2vw 0;
      border-top:1px solid #c2c2c2;
      div{
        width:23%;
        padding:1vw;
        img{
          display: block;
          width:30%;
          margin:2vw auto;
        }
      }
    }
  }
</style>
