<template>
  <body>
  	<div class="head">
  	  <div class="img">
  	    <wc-swiper class="swiper">
  	      <wc-slide v-for="item in items" >
  	        <img :src="item" width="100%">
  	      </wc-slide>
  	    </wc-swiper>
  	  </div>
      <div class="bigbox">
        <div class="smallbox"><img src="/static/image/index9.png" alt="">话题</div>
        <div class="smallbox"><img src="/static/image/index8.png" alt="">问答</div>
        <div class="smallbox"><img src="/static/image/index7.png" alt="">测评</div>
        <div class="smallbox" @click="crystal"><img src="/static/image/inde6x.png" alt="">水晶</div>
        <div class="smallbox"><img src="/static/image/index5.png" alt="">达人</div>
      </div>
      <div class="thing">
        <div class="say"></div>
        猫咪不停叫唤的五大原因，做家长的一定要注意
      </div>
    </div>
    <div class="user" v-for="user in users">
      <router-link to='/article/ui'>
         <div class="nav">
          <div class="userimg" :style="{background:user[0],borderRadius:'50% 50%',backgroundSize:'contain'}">
            <div class="vip" :style="{background:user[1],borderRadius:'50% 50%',backgroundSize:'contain'}"></div>
          </div>
          <div class="username">{{user[2]}}</div>
          <div class="follow">关注</div>
          <div class="title">{{user[3]}}</div>
        </div>
      </router-link>
      <router-link class="black" to="/article/Send">
        <p>{{user[4]}}</p>
        <img :src="user[5]" width="100%">
        <div class="like"><i class="el-icon-chat-round"></i>{{user[6]}}&nbsp; &nbsp;&nbsp;&nbsp;<i class="el-icon-star-off"></i>{{user[7]}}</div><br>
        <div class="look">{{user[8]}}浏览</div>
      </router-link>
    </div>
      <br>
      <br>
      <br>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        items:[
          "/static/image/caf198355b111d719c525bdf146c9520.jpg","/static/image/5b97b4fe9d5cabb4da070531466f5563.jpg","/static/image/721295cbdc783ab5cbd6b6de1dc148cd.jpg"
        ],
        users:[
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
        ],
      }
    },
    methods:{
      crystal(){
        this.$router.push("/cty/crystal")
      }
    }
  }
</script>

<style lang="less">
  body{
    margin:32vw 0 0 0;
    .bigbox{
      margin:5vw 0 0 0 ;
      display: flex;
      justify-content: space-around;
      text-align: center;
      .smallbox{
        width:14%;
        img{
          width:100%;
        }
      }
    }
    .thing{
      padding:2vw 2vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size:3.8vw;
      line-height: 10vw;
      height:10vw;
      margin:2vw 0;
      border-top:1px solid #edebeb;
      border-bottom:1px solid #edebeb;
      .say{
        width:20%;
        height:100%;
        background: url("/static/image/600cc8094e2f8a6e74fa0466db3ad901.png") no-repeat center;
        float:left;
        margin:0 2vw 0 0;
        background-size: contain;
      }
    }
    .user{
      padding:1rem 2vw;
      height: 25rem;
      border-bottom:1px solid gray;
      .black{
        color:black;
        text-decoration: none;
      }
      .nav{
        width:100%;
        height:10%;
        .userimg{
        width:10%;
        height:100%;
        position:relative;
        float:left;
        z-index: -1;
        .vip{
          width:40%;
          height:40%;
          position:absolute;
          bottom:0;
          right:0;
        }
      }
      .username{
        padding:.7rem 0 0 .4rem;
        float:left;
        color:black;
      }
      .follow{
        margin:.7rem 0 0 .4rem;
        color:red;
        float:right;
        padding:.2rem 1rem;
        border:1px solid #f55b50;
        border-radius: 4vw;
      }
      .title{
        padding:1rem 0 0 .4rem;
        font-size:12px;
        color:#999999;
        float:right;
      }
      }
    .like{
      float:right;
    }
    .look{
      font-size:12px;
    }
    }
  }
</style>
