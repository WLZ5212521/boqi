<template>
  <div class="hello">
    <wc-swiper class="swiper">
      <wc-slide v-for="(key,item,i) in items" >
        <img :src="item" alt="">
      </wc-slide>
    </wc-swiper>
    <el-row  class="index" style="margin:0;padding:0;">
      <el-col :span="6" class="grid-one">首页</el-col>
      <router-link to="/shop/shopindex"><el-col :span="6" class="grid-two">商城</el-col></router-link>
      <router-link to="/wiki"><el-col :span="6" class="grid-there">百科</el-col></router-link>
      <router-link to="/cty/ctyindex"><el-col :span="6" class="grid-four">社区</el-col></router-link>
    </el-row>
    <br><br>
    <div class="Pet">
      <div class="hot_pet"><span>|</span>热门宠物</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <br>
      <br>
      <div class="Pets" v-for="pet in pets"><div class="img" :style="{background:pet[0],borderRadius:'50% 50%',backgroundSize:'cover'}"></div>
      <br>
      {{pet[1]}}
      </div>
    </div>
    <div class="pag">
      <div class="klg"><span>|</span>知识推荐</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <br><br>
      <div class="pagtxt" v-for="pag in pags">
        <div class="pagimg"><img :src='pag[3]'></div>
        <h2>{{pag[0]}}</h2>
        <div class="from">{{pag[1]}}<div class="date">{{pag[2]}}</div></div>
      </div>
    </div>
    <div class="communitylife">
      <div class="comlife"><span>|</span>社区.生活</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <br><br>
      <div class="con">
        <router-link to="/Hotposts"><button >热门帖子</button></router-link>
        <router-link to="/Recentreply"><button >最近回复</button></router-link>
        <router-link to="/newest"><button >最新帖子</button></router-link>
        <router-view>
        </router-view>
      </div>
    </div>
    <div class="Hotgoods">
      <div class="selling"><span>|</span>热销商品</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <wc-swiper class="swipers">
        <wc-slide v-for="n in 4">
          <div class="box">
            <div class="small" v-for="df in dfs">
              <div class="imgs" :style="{background:df[0],backgroundSize:'180% 80%',width:'100%',height:'70%'}"></div>
              <div class="describe">{{df[1]}} </div><br><span class="less">{{df[2]}}</span><span class="than">{{df[3]}}</span>
            </div>
          </div>
        </wc-slide>
      </wc-swiper>
    </div>
    <div class="news">
      <div class="new"><span>|</span>最新内容</div><div class="more">更多>&nbsp;&nbsp;&nbsp;</div>
      <br><br>
      <div class="content" v-for="con in cons">
        <div class="image" :style="{background:con[0],borderRadius:'5%',backgroundSize:'cover',width:'30%',height:'100%'}"></div>
        <h3>{{con[1]}}</h3>
        <span class="text">{{con[2]}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data (){
    return {
    // cli:true,
      items:{'/static/image/banner1.jpg':'','/static/image/banner2.jpg':'','/static/image/banner3.jpg':''},
      pets:[
        ['url(/static/image/dog.jpg) center',"金毛"],['url(/static/image/dog.jpg) center',"哈士奇"],['url(/static/image/dog.jpg) center',"比熊犬"],
        ['url(/static/image/dog.jpg) center',"博美犬"],['url(/static/image/dog.jpg) center',"边境牧羊犬"],['url(/static/image/dog.jpg) center',"贵宾"],
        ['url(/static/image/dog.jpg) center',"异国短毛猫"],['url(/static/image/dog.jpg) center',"垂耳兔"],['url(/static/image/dog.jpg) center',"约克夏"],
        ['url(/static/image/dog.jpg) center',"波斯猫"],['url(/static/image/dog.jpg) center',"折耳猫"],['url(/static/image/dog.jpg) center',"大鳄龟"]
      ],
      pags:[
        ["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg"],["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg"]
        ,["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg"],["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg"]
        ,["大连牛头梗价格-有谁知道牛头梗多少钱一条","《萌宠》","2020-09-10","/static/image/dog.jpg"]
      ],
      dfs:[
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80'],
        ['url(/static/image/gouliang.jpg) no-repeat center','卡乐Kaler鸡肉犬粮鲜封包100g狗湿粮成长配方','￥599.00','￥670.80']
      ],
      cons:[
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？'],
        ['url(/static/image/dog.jpg) center','狗为什么喜欢吃屎？狗吃屎应该怎么办','很多家中喂养宠物犬的朋友们在生活中可能会遇到狗狗吃屎的现象，狗为什么喜欢吃屎？']
      ]
    }
    },
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
    padding: 0 2rem;
    a{
    text-decoration: none;
    }
    h2{
    font-weight:normal;
      color:black;
      margin:0;
      width:70%;
    }
    .from{
      margin: 1rem 1rem;
      color:gray;
      width:70%;
      .date{
        float:right;
      }
    }
    .pagimg{
      float:right;
    }
  }
  .communitylife{
   .comlife{
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
.con{
  padding:1rem;
  button{
   width:32%;
   height:3rem;
   background-color: #fff;
   border-radius: 5px;
   border: 1px solid #f0f0f0;
  }
  .active {
    background-color: red;
  }
}
.Hotgoods{
  height:350px;
  .selling{
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
    .box{
      width:400%;
      height: 330px;
      .small{
      float:left;
      margin:.2rem;
      width:5.7%;
      height:300px;
      a{
        text-decoration: none;
        color:black;
      }
      .describe{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size:14px;
        width:100%;
        height:13%;
      }
      .less{
        font-size:10px;
        color:red;
      }
      .than{
        font-size: 10px;
        color:#999999;
      }
    }
    }
  }
  .news{
   .new{
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
     .content{
       padding:1rem 0;
       width:96%;
       height: 120px;
       margin:auto;
       a{
         text-decoration: none;
         color:black;
       }
       .text{
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2;
         overflow: hidden;
         color:#cacaca;
       }
       .image{
         float:left;
         width:30%;
         height:100%;
         margin:0 1rem 0 0;
       }
       h3{
         font-weight:normal;
         white-space: nowrap;
         text-overflow: ellipsis;
         overflow: hidden;
       }
     }
  }
</style>
