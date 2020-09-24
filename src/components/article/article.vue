<template>
  <body>
  	<nav>
      <div @click="goBack" class="back"></div>
    </nav>
    <section>
      <h3>德牧死胎的原因—造成死胎的原因是什么</h3>
      <p>2020-07-28  16:58:12&nbsp;&nbsp;三三6</p>
      <p>畜禽全身毛皮肤垢屑往往含各种病毒、病菌、疥螨、虱等某种疾病病原体则疾病传播媒介狗传染病狂犬病自家狗咬没事经犬染肠道传染病: <br>
        1、贾第鞭毛虫病蓝氏贾第鞭毛虫种鞭毛状寄性原虫世界范围内腹泻重要病能引起犬类等哺乳物腹泻病经粪-口达企传播染临床表现乏力、腹胀腹泻腐败气味便粪便检查确诊甲硝唑治疗效仍复发
         鬓便排适宜气候条件虫卵存1类经食入虫卵染其间宿主主
        要累及**方(60%）肺(25%）旦默球窭勺如赫步
        重者死亡治疗手术切除棘球囊主辅阿本达唑等约方*米1水
        蝴病（泡型包虫病）主要累及***其向***周边部位浸润云工
        转移至肺脑部称恶性包虫病主要采取手术切除治疗<br>
        经犬传播蝉虱媒介传染病:
        犬埃立克体病由严格细胞内寄埃立克体经蝉媒介所致疾病
        犬种埃立克体宿主包括犬埃立克体及组埃利希体(别与单核细胞性埃立克体病、粒细胞性埃立克体病及狗全血细胞
        减少症关）我已经发现犬埃立克体犬埃立克体扁平埃立克
        体两种临床症状包括发热、体重严重减轻、流鼻血腹泻带
        血等白细胞血板计数同降我犬埃立克体病特点严重病犬广
        泛性血或继发染死亡犬与间立克体病传播具潜能染主要经
        蝉叮咬临床表现发热、痛、寒战及乏力伴白细胞血板减少
        实**酶异四环素西环素治疗效<br>
        至于弓形虫看看面信息: <br>
        弓形虫传染<br>
        首先吃未煮熟肉特别猪、羊几乎所哺乳物鸟类鼠类、猪、
        羊、牛、家兔鸡、鸭、鹅等都传染弓形虫且染率高传染源
        主要自于些物肉类涮肉温度够间短其弓形虫没杀死传染危
        险肉或切肉案板污染同传染污染羊、牛奶传染我口弓形虫
        染率较低能与熟食肉类习惯关 <br>
        狗传染弓形虫粪便排泄物都没传染性吃狗肉传染说狗与关
        系密切类重要传染源孩现智力迟钝、先性脏病或者手指归
        罪于家养狗些都缺乏根据 <br>
        染猫粪重要传染源猫猫科物弓形虫终宿主染猫粪便排囊合
        般持续1周至20更极少;段间传染期世界各调查约1%猫粪
        便内含弓形虫囊合猫粪囊合须外界发育2~5才传染性所几
        处理猫粪非重要囊合水、潮湿土壤存几月或更猫粪污染食
        物、饮水、甚至灰尘吃都传染完全熟食肉类区猫科物重要
        传染源建议用消灭家猫控制弓形虫病切实际作间宿主许其
        物同传播例许牧场极少猫牛羊染;且世界别岛屿没猫岛居
        民染率仍高所内本重要《体寄虫》书说:由于作间宿主家
        畜染率高故染源说猫粪污染及吃未熟肉类重要 <br>
        孕妇染弓形虫传染给胎发先性染由于先性染胎能产严重所
        重要怀孕前没染弓形虫孕妇怀孕期间发初（原发性)染才
        能传染给胎孕妇怀孕前染弓形虫再传染危险 <br>
        至于怀孕要要养宠物建议要养孕妇免疫力比较低狗狗身确
        实细菌舍送或者朋友家寄养段间要注意家狗狗卫让屋空气
        流通点给狗狗洗澡要太亲近更要让直接舔嘴哦定要经洗手
        (用肥皂水哦）狗狗注射犬用狂犬病疫苗使其发病没杀灭
        狂犬病病毒作用所其伤仍应全程足量注射用狂犬病疫苗没
        流血般用打针抓红印句用肥皂水清洗 <br>
        般洗15钟再用清水冲10钟主要保险点 <br> <br>
        希望帮助 <br>
        </p>
        <div class="Solicitation">波奇网诚征优秀稿件<div class="guide">投稿指南></div></div>
        <br>
        <p>猜你喜欢</p>
        <br>
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
        <p>相关文章</p>
        <br>
        <div class="pagtxt" v-for="pag in pags">
          <div class="pagimg"><img :src='pag[1]'></div>
          <h3>{{pag[0]}}</h3>
          <div class="details">{{pag[2]}}</div>
        </div>
        <br>
        <p>推荐文章</p>
        <br>
        <div class="box">
          <div class="small" v-for="item in items">
            <div class="img" :style="{background:item[0],backgroundSize:'cover'}"></div>
            <div class="text">{{item[1]}}</div>
          </div>
        </div>
    </section>
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
          ['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],
          ['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],
          ['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],
          ['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],
          ['url(/static/image/middledog.jpg)','狗狗生孩子颜色'],
        ],
        users:[
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
          ['url(/static/image/userimg.jpg)','url(/static/image/v.png)','萌宠治愈师','知名萌宠博主','自从养了宠物之后，你有没有觉得，自己在家里都是被监视着了?尤其是养了猫咪之后，它们天生的好奇心，让你无时无刻不被它们盯着，有时候就算你刻意不让它们盯着看，但它们总是能想到办法来偷看你的。就有这么—位网',"/static/image/post.jpg",0,5,7890],
        ],
        pags:[
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
          ['托运哈士奇大概什么价位-哈士奇大概多少钱 ','/static/image/dog.jpg','哈士奇大概多少钱？哈士奇（详情介绍）哈士奇从北京托运至上海'],
        ],
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      }
    },
    methods: {
      goBack() {
        this.$router.push('/wiki');
      },
    },
  }
</script>

<style lang="less">
  body{
    margin:0 .5rem;
    nav{
      width:100%;
      height: 2rem;
      position:fixed;
      top:0;
      background-color: #fff;
      border-bottom:1px solid gray;
      .back{
        width:10%;
        float:left;
        height:100%;
        background: url("/static/image/back.svg") center no-repeat;
      }
    }
    section{
      h3{
        margin:3rem 0 0 0;
      }
      .guide{
        color:red;
        float:right;
        padding:0 1rem;
      }
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
    .pagtxt{
      border-bottom:1px solid gray;
      height:120px;
      padding:.5rem 0;
      h3{
      font-weight:normal;
        color:black;
        margin:.5rem 0;
        width:70%;
      }
      .pagimg{
        float:right;
      }
      .details{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size:13px;
      }
    }
    .box{
      width:100%;
      height:10rem;
      border:1px solid red;
      overflow:hidden;
      .small{
        border:1px solid red;
        float:left;
        width:30%;
        height:100%;
        margin:0 .3rem;
        .img{
          width:100%;
          height:80%;
        }
      }
    }
    }
  }
</style>
