<template>
  <div class="body">
    <div class="bigbg">
      <img src="/static/image/11.png" alt="" width="100%">
      <div class="btn"></div>
    </div>
    <div class="baike"></div>
    <div class="article">
      <div class="title"><span>|</span>宠物文章</div>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>狗狗</div></router-link>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>猫猫</div></router-link>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>小宠</div></router-link>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>水族</div></router-link>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>植物</div></router-link>
      <router-link to="/dogmth"><div class="cat1"><img src="/static/image/cat_1.png"><br>爬虫</div></router-link>
    </div>
    <div class="Complete">
      <div class="title"><span>|</span>宠物大全</div>
      <router-link to="complete"><div class="dog"><img src="/static/image/animate_cat1.png" alt=""></div></router-link>
      <router-link to="complete"><div class="cat"><img src="/static/image/animate_cat2.jpg" alt=""></div></router-link>
      <router-link to="complete"><div class="Reptiles"><img src="/static/image/animate_cat4.png" alt=""></div></router-link>
      <router-link to="complete"><div class="Botany"><img src="/static/image/animate_cat5.png" alt=""></div></router-link>
      <router-link to="complete"><div class="Aquatic"><img src="/static/image/animate_cat6.png" alt=""></div></router-link>
    </div>
    <div class="like">
      <div class="title"><span>|</span>猜你喜欢<div class="change" @click="chn"><i class="el-icon-refresh-right"></i>换一换</div></div>
      <div class="com">
        <router-link to='/article/article'><p class="com1"><i class="el-icon-document"></i>对猫咪无毒的植物-哪些植物对猫有害？</p></router-link>
        <p class="com1"><i class="el-icon-document"></i>对猫咪无毒的植物-哪些植物对猫有害？</p>
        <p class="com1"><i class="el-icon-document"></i>对猫咪无毒的植物-哪些植物对猫有害？</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"wiki",
    data(){
      return{

      }
    },
    methods:{
      chn:function(event){
        var arr=["对猫咪无毒的植物-哪些植物对猫有害？","德牧死胎的原因—造成死胎的原因是什么","巴西龟病症治疗—关于巴西龟的若干病症"
                 ,"兔子睡什么地方好—兔子最好睡在什么地方","狗狗蛋糕微博—狗狗可以吃蛋糕吗","犬性冠状病毒—狗狗得了冠状病毒严重吗"]
        var num1=Math.floor(Math.random()*6)
        var num2=Math.floor(Math.random()*6)
        var num3=Math.floor(Math.random()*6)
        var com=document.querySelector(".com")
        com.innerHTML=`<p class="com1"><i class="el-icon-document"></i>${arr[num1]}</p>
        <p class="com1"><i class="el-icon-document"></i>${arr[num2]}</p>
        <p class="com1"><i class="el-icon-document"></i>${arr[num3]}</p>`
      }
    }
  }
</script>
<style lang="less">
  .bigbg{
    background:url('/static/image/b-bg.jpg');
    background-size: cover;
    .btn{
      background: url('/static/image/b-btn.png') no-repeat;
      background-size: contain;
      height:60px;
      width:60%;
      margin:auto;
    }
  }
  .baike{
    background: url('/static/image/baike_logo.png') no-repeat center;
    border-bottom:2px solid #afafaf;
    width:100%;
    height: 60px;
  }
  .article{
    width:100%;
    // margin:1rem;
    span{
      color:orange;
    }
    .cat1{
      width:26%;
      margin:.8rem;
      text-align:center;
      float:left;
      color:black;
    }
  }
  .Complete{
    width:100%;
    overflow: hidden;
    .title{
      margin:1rem;
    }
    span{
      color:blue;
    }
    .dog{
      width:66%;
      height: 260px;
      float:left;
      img{
        width:100%;
      }
    }
    .cat{
      width:32.5%;
      height: 260px;
      float:right;
      img{
        width:100%;
      }
    }
    .Reptiles{
      width:32.5%;
      float:left;
      margin:.3rem 0;
      img{
        width:100%;
      }
    }
    .Botany{
      width:32.5%;
      float:left;
      margin:.3rem .3rem;
      img{
        width:100%;
      }
    }
    .Aquatic{
      width:32.5%;
      float:left;
      margin:.3rem 0;
      img{
        width:100%;
      }
    }
  }
  .like{
    width:90%;
    padding:1rem;
    .com1{
     color:black;
     text-decoration: none;
    }
   span{
     color:green;
   }
   .change{
     float:right;
     color:#c4c4c4;
   }
  }
</style>
