<template>
  <body>
  	<div class="user" v-for="user in users">
  	     <div class="nav">
  	      <div class="userimg" :style="{background:user[0],borderRadius:'50% 50%',backgroundSize:'contain'}">
  	        <div class="vip" :style="{background:user[1],borderRadius:'50% 50%',backgroundSize:'contain'}"></div>
  	      </div>
  	      <div class="username">{{user[2]}}</div>
  	      <div class="follow">关注</div>
  	      <div class="title">{{user[3]}}</div>
  	    </div>
  	    <p>{{user[4]}}</p>
  	    <img :src="user[5]" width="100%">
  	    <div class="like"><i class="el-icon-chat-round"></i>{{user[6]}}&nbsp; &nbsp;&nbsp;&nbsp;<i class="el-icon-star-off"></i>{{user[7]}}</div><br>
  	    <div class="look">{{user[8]}}浏览</div>
  	</div>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        users:[
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','国庆放假对铲屎官似乎没有什么关系，因为总感觉和旅游无缘。能否实现旅游，还需根据自家的情况来决定，例如家里平时除了自己喂猫铲屎，如果能有亲人的帮手，那么还是可以考虑国庆假期计划旅游。',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','国庆放假对铲屎官似乎没有什么关系，因为总感觉和旅游无缘。能否实现旅游，还需根据自家的情况来决定，例如家里平时除了自己喂猫铲屎，如果能有亲人的帮手，那么还是可以考虑国庆假期计划旅游。',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','国庆放假对铲屎官似乎没有什么关系，因为总感觉和旅游无缘。能否实现旅游，还需根据自家的情况来决定，例如家里平时除了自己喂猫铲屎，如果能有亲人的帮手，那么还是可以考虑国庆假期计划旅游。',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','国庆放假对铲屎官似乎没有什么关系，因为总感觉和旅游无缘。能否实现旅游，还需根据自家的情况来决定，例如家里平时除了自己喂猫铲屎，如果能有亲人的帮手，那么还是可以考虑国庆假期计划旅游。',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','国庆放假对铲屎官似乎没有什么关系，因为总感觉和旅游无缘。能否实现旅游，还需根据自家的情况来决定，例如家里平时除了自己喂猫铲屎，如果能有亲人的帮手，那么还是可以考虑国庆假期计划旅游。',"/static/image/post.jpg",0,5,7890],
        ],
      }
    }
  }
</script>

<style lang="less">
  body{
    .user{
      padding:1rem 0;
      width:100%;
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
        border-radius: 45% 45%;
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
