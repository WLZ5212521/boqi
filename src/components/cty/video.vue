<template>
  <body>
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
  	  </router-link>
  	    <video id="myVideo" class="video-js " controls  preload="metadata"  width="100%">
  	      <source :src="user[5]" type="video/mp4"  width="100%">
  	     </video>
  	    <div class="like"><i class="el-icon-chat-round"></i>{{user[6]}}&nbsp; &nbsp;&nbsp;&nbsp;<i class="el-icon-star-off"></i>{{user[7]}}</div><br>
  	    <div class="look">{{user[8]}}浏览</div>
  	</div>
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
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/Fh4FcUgsXiA8yPqtIDffX-BOg4U-.mp4",0,5,7890],
        ],
      }
    },
    methods:{
      canplay(){
        console.log(1)
      }
    }
  }
</script>

<style lang="less">
  body{
    margin:32vw 0 0 0;
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
