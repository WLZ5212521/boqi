<template>
  <body>
    <nav>
      <div class="back" @click="goback"></div>
      <div class="text">黑卡充值攻略</div>
    </nav>
    <el-button type="text" @click="open"><img src="/static/image/FnBw1d5Z4cCtbZge91NBeCkzILHY.jpg" alt="" width="100%"></el-button>
    <img src="/static/image/FtT0eWr4FP9yiJtxXZaebJEiCoNd.jpg" alt="" width="100%">
    <img src="/static/image/FujKSu7j6aDd1ewVP0qWnn0bBFvo.jpg" alt="" width="100%">
    <wc-swiper class="swiper">
      <wc-slide v-for="item in items" >
        <el-button type="text" @click="opentwo"><img :src="item" alt="" width="100%"></el-button>
      </wc-slide>
    </wc-swiper>
    <br>
    <br>
    <br>
    <br>
    <br>
    <img src="/static/image/FolScFikRXbFCyh_X2CUYHLlCYNM.gif" class="gif" width="100%">
  </body>
</template>

<script>
  export default{
    data(){
      return{
        items:[
          "/static/image/FjPgm9Fmwr2fwmT-6qc2g8mRyFTH.jpg","/static/image/FsGjIfTPpeQk3NtLcgsxhdQJhM0c.jpg","/static/image/Fq-3mVb85recLMiWiRIyG-NyCPt3.jpg",
          "/static/image/FqODJk_rxV7mcVq5OZmhmnhsXZ2F.jpg","/static/image/FkFpXIeo5ZPx8Bfnh2a2CF3pj-ha.jpg","/static/image/FrvtDc0ob-pEMXwCfFwLacvTJUqR.jpg",
          "/static/image/FtksrXsrSye-hftVQLiPKAc57FVn.jpg","/static/image/FtGNcdPHULYtC129qY8uY99lnjHf.jpg",
        ]
      }
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      open(){
        this.$alert('','',{
          title:"活动规则",
          message:":2020年09月28日00:00:00-2020年10月08日23:59:59。<br>一、充值赠送红包<br>1、单笔充值金额达到1000元或以上，除了充值赠送现金，额外再获得2个随机红包（总价值为20-50元），红包于充值后5min内到账；<br>2、红包限拼团及海淘商品不可用。3、红包每个账号仅赠送一次，重复充值不赠送。<br>二、1波奇豆兑换<br>1、活动期间每天10点限量30份1波奇豆免费兑换50元黑卡现金；<br>2、兑换到账的是一张商品兑换券；<br>3、中奖后请于10.9-10.14期间联系客服领取，黑卡现金以礼品卡的形式发放（非黑卡用户绑定礼品卡需先开通黑卡会员）。",
          center:true,
          dangerouslyUseHTMLString:true,
          confirmButtonText:"关闭窗口"
        })
      },
      opentwo(){
        this.$alert('','',{
          title:"提示",
          message:"确认使用1波奇豆兑换该权益？",
          showCancelButton:true,
          center:true,
        }).then(() => {
          this.$alert('','',{
            showConfirmButton:false,
            message: '来晚了，该权益已兑完，试试其他权益吧!'
          });
        })
      }
    }
  }
</script>

<style lang="less">
  body{
    nav{
      width:96%;
      height:10vw;
      margin:auto;
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
        font-size: 3.5vw;
      }
    }
    img{
        width: 100%;
        height: auto;
        display:block;
    }
    .gif{
      display:block;
      position:fixed;
      bottom:0;
    }
  }
</style>
