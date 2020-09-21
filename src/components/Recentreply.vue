<template>
  <div class="body">
   <div class="users" v-for="user in users">
          <a :href="user[6]"><div class="head":style="{background:user[0],borderRadius:'50% 50%',backgroundSize:'cover',width:'60px',height:'60px'}"></div>
          <h2>{{user[1]}}</h2>
          <div class="names">
            <div class="username">{{user[2]}}</div>
            <div class="time">{{user[3]}}<div class="look"><i class="el-icon-view"></i>{{user[4]}}&nbsp; &nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>{{user[5]}}</div></div>
          </div></a>
        </div>
  </div>
</template>

<script>
  export default{
    name:"Hotposts",
    data(){
      return{
        users:[
          ['url(/static/image/dog.jpg)','棒！','Mr PaPa','2020-09-21 07:35',0,0,''],['url(/static/image/dog.jpg)','棒！','Mr PaPa','2020-09-21 07:30',0,0,'']
          ,['url(/static/image/dog.jpg)','棒！','Mr PaPa','2020-09-21 07:30',0,0,''],['url(/static/image/dog.jpg)','棒！','Mr PaPa','2020-09-21 07:30',0,0,''],
          ['url(/static/image/dog.jpg)','棒！','Mr PaPa','2020-09-21 07:30',0,0,'']
        ]
      }
    }
  }
</script>

<style>
  .body{
    margin:1rem;
    .users{
      margin:1rem 0 5rem 0;
      padding:1rem 0;
      .head{
        margin:auto;
        float:left;
      }
      a{
        text-decoration: none;
        color:black;
      }
      h2{
        font-weight:normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        float:right;
        width:80%;
        margin:0;
      }
      .names{
        float:right;
        width:80%;
        color:#c4c4c4;
        .time{
          width:100%;
          float:left;
        .look{
          float:right;
        }
        }
      }
    }
  }
</style>
