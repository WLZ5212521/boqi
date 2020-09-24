<template>
  <body>
    <nav>
      <div class="cover" :style="{background:json.data.urlcover,backgroundSize:'cover'}">
      <div @click="goBack" class="back"></div>
        <div class="user" :style="{background:json.data.urluser,backgroundSize:'cover'}">
          <div class="userimg" :style="{background:json.data.urluserimg,borderRadius:'50% 50%',backgroundSize:'cover'}">
            <div class="vip" :style="{background:json.data.urlvip,borderRadius:'50% 50%',backgroundSize:'cover'}"></div>
          </div>
          <div class="username">
            {{json.data.username}}
            <div class="level">{{json.data.userlevel}}</div>
            <i :class="json.data.sex"></i>
            <div class="follow">关注</div>
          </div>
        </div>
      </div>
      <div class="authentication">波奇认证：{{json.data.authentication}}</div>
      <hr width="90%" color="#d8d8d8">
      <div class="signature">{{json.data.signature}}
        <div class="browse">浏览：{{json.data.browse}}&nbsp;&nbsp;|&nbsp;&nbsp;获赞：{{json.data.like}}</div>
      </div>
    </nav>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="num">
      <div class="follownum">{{json.data.follownum}} <br><span>关注</span></div>
      <div class="fans">{{json.data.fans}} <br><span>粉丝</span></div>
      <div class="pets">{{json.data.pets}} <br><span>宠物</span></div>
    </div>
    <div class="content">
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="album" chacked>相册 <span>{{json.data.albumnum}}</span></el-menu-item>
        <el-menu-item index="2" @click="videos">视频 <span>{{json.data.videonum}}</span></el-menu-item>
        <el-menu-item index="3" @click="qa">问答 <span>{{json.data.qanum}}</span></el-menu-item>
        <el-menu-item index="4" @click="articles">文章 <span>{{json.data.articlenum}}</span></el-menu-item>
        <el-menu-item index="5" @click="interaction">互动 <span>{{json.data.interactionnum}}</span></el-menu-item>
      </el-menu>
    </div>
      <router-view></router-view>
  </body>
</template>

<script>
  import json from '../../../static/ui.js'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        json:json
      }
    },
    methods:{
      goBack() {
        this.$router.push("/article/article");
      },
      album:function(){
        this.$router.push('/article/album')
      },
      videos:function(){
        this.$router.push('/article/videos')
      },
      qa:function(){
        this.$router.push('/article/qa')
      },
      articles:function(){
        this.$router.push('/article/articles')
      },
      interaction:function(){
        this.$router.push('/article/interaction')
      },
    }
   }
</script>

<style lang="less">
nav{
  width:100%;
  height:20rem;
  .back{
    width:10%;
    float:left;
    height:3rem;
    background: url("/static/image/back.svg") center no-repeat;
  }
  .cover{
    width:100%;
    height:100%;
    position:relative;
    .user{
      width:100%;
      height:30%;
      position:absolute;
      bottom:0;
      .userimg{
        position:absolute;
        left:6%;
        width:14%;
        height:60%;
        position:relative;
        .vip{
          width:25%;
          height:25%;
          position:absolute;
          bottom:0;
          right:0;
        }
      }
      .username{
        position:absolute;
        left:6%;
        width:89%;
        font-size:18px;
        .level{
          display: inline-block;
          border:1px solid gray;
          border-radius:45% 45%;
          padding:0 .6rem;
          font-size:12px;
        }
        .follow{
          float:right;
          border:1px solid red;
          border-radius:45% 45%;
          padding:.1rem 1rem;
          color:#e50000;
        }
      }
    }
  }
  .authentication{
    padding:0 1.5rem;
    font-size:13px;
  }
  .signature{
    padding:0 1.5rem;
    font-size:14px;
    .browse{
      font-size:12px;
      color:#8d8d8d;
    }
  }
}
.num{
  width:100%;
  height:3rem;
  span{
    color:#878787;
  }
  .follownum{
    float:left;
    padding:0 12%;
  }
  .fans{
    padding:0 12%;
    float:left;
  }
  .pets{
    padding:0 12%;
    float:right;
  }
}
.content{
width:90%;
padding:0 1rem;
  .el-menu-item{
    padding:.8rem 1.5rem;
    position:relative;
    span{
      position:absolute;
      top:0;
      right:20%;
      font-size:.7rem;
    }
  }
}
</style>
