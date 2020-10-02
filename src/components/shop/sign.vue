<template>
  <body>
  	<nav>
      <img src="/static/image/top-bg-v3.jpg" alt="" width="100%">
      <img src="/static/image/sign-box-bg-v3-1.png" alt="" class="bg1">
      <img src="/static/image/sign-btn.png" alt="" class="bg2">
      <div class="signtoday">今日签到</div>
      <div class="rule">规则</div>
      <div class="switch">
        签到提醒
        <el-switch v-model="value" active-color="#f2342e" inactive-color="#ca2e29"></el-switch>
      </div>
    </nav>
    <section>
      <div class="Newbie">
        <div class="task">
          <span>|</span>
          新手任务
          <div class="open" @click="hide">隐藏</div>
        </div>
        <div class="tasks" v-for="task in tasks">
          <div class="taskimg" :style="{background:task[0],backgroundSize:'contain'}"></div>
          <p>{{task[1]}}</p>
          <span>{{task[2]}}</span>
          <div class="go" @click="task[3]">去完成</div>
        </div>
      </div>
      <div class="Daily">
        <div class="task">
          <span>|</span>
          日常任务
          <div class="open" @click="hidea">隐藏</div>
        </div>
        <div class="daliys" v-for="daily in daliys">
          <div class="dailyimg" :style="{background:daily[0],backgroundSize:'contain'}"></div>
          <p>{{daily[1]}}</p>
          <span>{{daily[2]}}</span>
          <div class="go" @click="daily[3]">去完成</div>
        </div>
      </div>
      <div class="Cumulative">
        <div class="task">
          <span>|</span>
          日常任务
          <div class="open" @click="hideb">隐藏</div>
        </div>
        <div class="Cumulatives" v-for="Cumulative in Cumulatives">
          <div class="Cumulativeimg" :style="{background:Cumulative[0],backgroundSize:'contain'}"></div>
          <p>{{Cumulative[1]}}</p>
          <span>{{Cumulative[2]}}</span>
          <div class="go" @click="Cumulative[3]">去完成</div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        value:false,
        tasks:[
          ["url(/static/image/icon14.png) no-repeat center","绑定手机号","领取1次抽奖机会","bind"],
          ["url(/static/image/icon2.png) no-repeat center","App内商城首单","下首单可领取1次抽奖机会","order"],
          ["url(/static/image/icon4.png) no-repeat center","首次评价有惊喜","评价订单可领取1次抽奖机会","evaluation"],
          ["url(/static/image/icon5.png) no-repeat center","成为神奇卡会员","开通神奇卡可领取10次抽奖机会","vip"],
          ["url(/static/image/icon6.png) no-repeat center","成为神奇黑卡会员","开通神奇黑卡可领取20次抽奖机会","svip"],
        ],
        daliys:[
          ["url(/static/image/icon7.png) no-repeat center","分享得奖励","分享签到活动可领取1次抽奖机会","bind"],
          ["url(/static/image/icon8.png) no-repeat center","评论有惊喜","社区发表评论可领取1次抽奖机会","order"],
          ["url(/static/image/icon9.png) no-repeat center","发帖抽好礼","社区发帖成功可领取1次抽奖机会","evaluation"],
        ],
        Cumulatives:[
          ["url(/static/image/icon10.png) no-repeat center","完成订单","App内完成5单可领取1次抽奖机会","bind"],
          ["url(/static/image/icon11.png) no-repeat center","成功邀请好友注册","成功邀请好友注册最高赢100元红包","order"],
          ["url(/static/image/icon12.png) no-repeat center","成功邀请好友下单","可领取3次翻卡牌抽奖机会","evaluation"],
        ],
      }
    },
    methods:{
      hide(event){
        event.target.textContent = event.target.textContent=="展开"?"隐藏":"展开";
        event.target.parentElement.parentElement.style.height=  event.target.parentElement.parentElement.style.height=="30vw"?"110vw":"30vw"
      },
      hidea(event){
        event.target.textContent = event.target.textContent=="展开"?"隐藏":"展开";
        event.target.parentElement.parentElement.style.height=  event.target.parentElement.parentElement.style.height=="45vw"?"66vw":"45vw"
      },
      hideb(event){
        event.target.textContent = event.target.textContent=="展开"?"隐藏":"展开";
      }
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    nav{
      width:100%;
      position:relative;
      overflow:hidden;
      .bg1{
        width:86%;
        display:block;
        margin:auto;
        position:absolute;
        top:30%;
        left:7%;
      }
      .bg2{
        width:40%;
        position:absolute;
        top:50%;
        left:30%;
      }
      .signtoday{
        width:40%;
        text-align:center;
        color:#fff;
        font-size:4.2666667vw;
        position:absolute;
        top:50%;
        left:30%;
      }
      .rule{
        width:10%;
        font-size:4vw;
        color:#f24a45;
        background-color: #fff;
        border:1px solid red;
        text-align:center;
        padding:.4rem;
        border-radius:30px 0 0 30px;
        position:absolute;
        top:10%;
        right:-1%;
      }
      .switch{
        font-size:3.2vw;
        position:absolute;
        top:90%;
        left:60%;
        .el-switch__core{
          width:10vw;
        }
      }
    }
    section{
      width:96%;
      margin:auto;
      .Newbie,.Daily,.Cumulative{
        width:100%;
        height:110vw;
        overflow:hidden;
        .task{
          background-color: #ededed;
          font-size:14px;
          padding:.5rem;
          span{
            color:red;
            font-weight: bold;
          }
          .open{
            float:right;
          }
        }
        .tasks,.daliys,.Cumulatives{
          width:100%;
          height:16vw;
          margin:.8rem 0;
          .taskimg,.dailyimg,.Cumulativeimg{
            width:16%;
            height:80%;
            float:left;
          }
          p{
            font-size:18px;
            margin:0;
          }
          span{
            font-size:14px;
          }
          .go{
            color:#fff;
            padding:.5rem;
            float:right;
            background: url("/static/image/todo-btn.png") no-repeat center;
            background-size: 100% auto;
          }
        }
      }
      .Daily{
        height:66vw;
      }
      .Cumulative{
        height:66vw;
      }
    }
  }
</style>
