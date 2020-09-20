<template>
  <div class="hello">
    <wc-swiper class="swiper">
      <wc-slide v-for="(key,item,i) in items" >
        <a :href="key"><img :src="item" alt=""></a>
      </wc-slide>
    </wc-swiper>
    <el-row  class="index" style="margin:0;padding:0;">
      <a href=""><el-col :span="6" class="grid-one">首页</el-col></a>
      <a href=""><el-col :span="6" class="grid-two">商城</el-col></a>
      <a href=""><el-col :span="6" class="grid-there">百科</el-col></a>
      <a href=""><el-col :span="6" class="grid-four">社区</el-col></a>
    </el-row>
    <br><br>
    <div class="Pet">
      <div class="hot_pet"><span>|</span>热门宠物</div><a href=""><div class="more">更多>&nbsp;&nbsp;&nbsp;</div></a>
      <br>
      <br>
      <div class="Pets" v-for="pet in pets"><a :href="pet[3]"><div class="img" :style="{background:pet[0],borderRadius:'50% 50%',backgroundSize:'cover'}"></div>
      <br>
      {{pet[1]}}</a>
      </div>
    </div>
    <div class="pag">
      <div class="klg"><span>|</span>知识推荐</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <br><br>
      <div class="pagtxt" v-for="pag in pags">
        <a :href="pag[4]">
        <div class="pagimg"><img :src='pag[3]'></div>
        <h2>{{pag[0]}}</h2>
        <div class="from">{{pag[1]}}<div class="date">{{pag[2]}}</div></div></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data (){
    return {
      items:{'/static/image/banner1.jpg':'','/static/image/banner2.jpg':'','/static/image/banner3.jpg':''},
      pets:[
        ['url(/static/image/dog.jpg) center',"金毛",""],['url(/static/image/dog.jpg) center',"哈士奇",""],['url(/static/image/dog.jpg) center',"比熊犬",""],
        ['url(/static/image/dog.jpg) center',"博美犬",""],['url(/static/image/dog.jpg) center',"边境牧羊犬",""],['url(/static/image/dog.jpg) center',"贵宾",""],
        ['url(/static/image/dog.jpg) center',"异国短毛猫",""],['url(/static/image/dog.jpg) center',"垂耳兔",""],['url(/static/image/dog.jpg) center',"约克夏",""],
        ['url(/static/image/dog.jpg) center',"波斯猫",""],['url(/static/image/dog.jpg) center',"折耳猫",""],['url(/static/image/dog.jpg) center',"大鳄龟",""]
      ],
      pags:[
        ["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg",''],["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg",'']
        ,["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg",''],["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg",'']
        ,["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg",'']
      ],
    }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper{
    margin: 0;
    padding: 0;
    img{
      width: 100%;
      height: auto;
      touch-action: none
    }
    wc-slide{
      width: 100%;
      height: 300px;
    }
  }
.index{
  width:100%;
  height: 120px;
  text-align:center;
  line-height: 220px;
  font-size:.9rem;
  .grid-one{
    height:100%;
    background:url("/static/image/icon.png") no-repeat -6% ;
    background-size: 460% 52%;
    color:black;
   }
   .grid-two{
     height:100%;
     background:url("/static/image/icon.png") no-repeat 22%;
     background-size: 460% 52%;
      color:black;
    }
    .grid-there{
      height:100%;
      background:url("/static/image/icon.png") no-repeat 51%;
      background-size: 460% 52%;
      color:black;
     }
     .grid-four{
       height:100%;
       background:url("/static/image/icon.png") no-repeat 79%;
       background-size: 460% 52%;
      color:black;
      }
  }
  .Pet{
    width:100%;
    height:530px;
    .hot_pet{
      margin:0 0 0 1rem;
      font-size:18px;
      float:left;
      span{
        color:red;
      }
    }
    .more{
      float:right;
      color:#b0b3b6;
    }
    .Pets{
      text-align:center;
      float:left;
      margin:5% 2%;
      width:20%;
      height: 110px;
      box-shadow: 0 2px 1px 0 gray;
      .img{
        margin:auto;
        width:4rem;
        height:4rem;
      }
    }
  }
  .pag{
    .klg{
      margin:0 0 0 1rem;
      font-size:18px;
      float:left;
      span{
        color:red;
      }
    }
    .more{
      float:right;
      color:#b0b3b6;
    }
  }
  .pagtxt{
    margin:2rem 0;
    height:120px;
    a{
    text-decoration: none;
    font-weight:normal;
    }
    h2{
      color:black;
      margin:0;
      width:70%;
    }
    .from{
      color:gray;
      width:70%;
      .date{
        float:right;
      }
    }
    .pagimg{
      margin:0 1rem 0 0;
      float:right;
    }
  }
</style>
