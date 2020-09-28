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
      <div class="header">
        <div class="personal"></div>
        <div class="search">&nbsp;<i class="el-icon-search"></i>&nbsp;&nbsp;请输入搜索关键字</div>
        <div class="ShoppingCart"></div>
      </div>
      <div class="Headlines">
        <div class="Headlineimg"></div>
        <div class="Headline" v-for="title in titles"><span>{{title}}</span></div>
        <div class="Headlinesi">&nbsp;&nbsp;<i class="el-icon-right"></i></div>
      </div>
    </div>
    <section>
      <img src="/static/image/SSaBNQqX.jpg" width="100%">
      <img src="/static/image/fVYYR2mS.gif" alt="" width="100%">
      <img src="/static/image/R7Q2xej5.gif" alt="" width="100%">
      <img src="/static/image/6qrDqZrT.gif" alt="" width="100%">
      <img src="/static/image/hYgOjHMY.jpg" alt="" width="100%">
      <img src="/static/image/aM9JyY1C.jpg" alt="" width="100%">
      <img src="/static/image/LVblqdNJ.jpg" alt="" width="100%">
      <img src="/static/image/8u36NFH0.jpg" alt="" width="100%">
      <img src="/static/image/YWUl5nCE.jpg" alt="" width="100%">
      <img src="/static/image/bSpObLmi.jpg" alt="" width="100%">
      <div class="nav">
        <div class="times">
          <div class="all">
            <router-link to="/shop/nine"><div class="time">09:00<br><span>即将开始</span></div></router-link>
            <div class="time">11:00<br><span>即将开始</span></div>
            <div class="time">13:00<br><span>即将开始</span></div>
            <div class="time">15:00<br><span>即将开始</span></div>
            <div class="time">17:00<br><span>即将开始</span></div>
            <div class="time">19:00<br><span>即将开始</span></div>
            <div class="time">21:00<br><span>即将开始</span></div>
          </div>
        </div>
        <router-view></router-view>
      </div>
      <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <img src="/static/image/RbChv1E6.jpg" alt="" width="100%">
      <img src="/static/image/9W68IdVW.jpg" alt="" width="100%">
      <div class="smallbody">
        <div class="type">
          <div class="goods" v-for="good in goods">
            <img :src="good[0]" alt="" width="100%"><br>
            {{good[1]}} <br>
            <div class="howmuch">{{good[2]}} <s>{{good[3]}}</s></div>
          </div>
        </div>
      </div>
      <div class="brands">
        品牌精选 <br>
        <div class="brand" v-for="img in imgs"><img :src="img" width="100%"></div>
      </div>
    </section>
    <footer>
      <div class="partition">
        <div class="div-demo" >
          <el-tabs class="el">
           <el-tab-pane label="猫咪海淘专区" name="first" value="first">
             <div class="box">
               <div class="detailed" v-for="dog in dogs" >
                 <div class="detailedimg" :style="{background:dog[0],backgroundSize:'contain',width:'100%',height:'80%'}">
                   <img :src="dog[5]">
                 </div>
                 <p>{{dog[1]}}</p>
                 {{dog[2]}}
                 <div class="price">{{dog[3]}} <span>{{dog[4]}}</span></div>
               </div>
             </div>
           </el-tab-pane>
           <el-tab-pane label="狗狗海淘专区" name="second"></el-tab-pane>
           <el-tab-pane label="驱虫护理" name="third"></el-tab-pane>
           <el-tab-pane label="营养保健" name="fourth"></el-tab-pane>
           <el-tab-pane label="狗狗零食" name="fivth"></el-tab-pane>
           <el-tab-pane label="猫咪零食" name="sixth"></el-tab-pane>
           <el-tab-pane label="日常用品" name="seventh"></el-tab-pane>
          </el-tabs>
        </div>
      <hr>
        <div class="footer">
          <p><a href="">电脑版</a>| <a href="">客户端</a></p>
          <br>
          <span>Copyright &copy; 2020沪ICP备13034501号-2</span><br>
          <span>波奇网版权所有</span><br>
          <span>光橙(上海）信息科技有限公司</span><br>
          <span>021-61096226</span><br>
          <span>上海市浦东新区盛夏路399号亚芯科技园1号楼6楼</span><br>
        </div>
      </div>

    </footer>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
    <img src="/static/image/2mDnNRYL.gif" class="money" width="15%">
  </body>
</template>
<script>
  export default{
    data(){
      return{
        items:[
          "/static/image/banner1.jpg","/static/image/banner2.jpg","/static/image/banner3.jpg","/static/image/banner2.jpg","/static/image/banner1.jpg","/static/image/banner3.jpg","/static/image/banner1.jpg","/static/image/banner2.jpg","/static/image/banner1.jpg",
        ],
        titles:[
          "波奇豆有效期规则公告","云南瑞丽、新疆等地物流通知"
        ],
        goods:[
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
        ],
        imgs:[
          '/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg',
          '/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg',
          '/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg','/static/image/shopbrand_logo_app1477621040_y.jpg',
          '/static/image/shopbrand_logo_app1477621040_y.jpg',
        ],
        dogs:[
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
          ['url(/static/image/nationalday.png) no-repeat center','直降￥36.5','滋益巅峰Ziwi peak牛肉主食狗罐头170g90%肉含量 新西兰原产地',"￥111.8",'￥89.9','/static/image/soldout.png'],
        ],
        scrollTop: 0,
        btnFlag:false,
      }
    },

      mounted () {
        window.addEventListener('scroll', this.scrollToTop,true)
      },
      destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
      },


      methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            const that = this
            let timer = setInterval(() => {
              let ispeed = Math.floor(-that.scrollTop / 5)
              document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
              if (that.scrollTop === 0) {
                clearInterval(timer)
              }
            }, 16)
        },
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
          const that = this
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          that.scrollTop = scrollTop
          if (that.scrollTop > 60) {
            that.btnFlag = true
          } else {
            that.btnFlag = false
          }
        }
      }

  }
</script>
<style lang="less">
  body{
    margin:0;
    padding:0;
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
        height: 400px;
      }
    }
   .header{
     width:100%;
     height:2rem;
     position:absolute;
     top:0;
     padding-top:.4rem;
     position:fixed;
     top:0;
     z-index: 10;
     .personal{
       width:10%;
       height:80%;
       background: url("/static/image/personal.svg") no-repeat center;
       background-size: contain;
       float:left;
     }
     .search{
       width:78%;
       height:80%;
       background-color: #fff;
       border-radius: 20px;
       padding:.2rem 0;
       color:#666666;
      float:left;
     }
     .ShoppingCart{
       width:10%;
       height:100%;
       background: url("/static/image/gouwu.svg") no-repeat center;
       background-size: contain;
       float:right;
     }
   }
   .Headlines{
     @keyframes move
     {
         0%
         {
             transform:translateY(-3.5rem);
         }
        10%
         {
             transform:translateY(-1.5rem);
         }
        50%
         {
             transform:translateY(-1.5rem);
         }
        60%
         {
             transform:translateY(-3.5rem);
         }
        100%
         {
             transform:translateY(-3.5em);
         }
     }
       height:2rem;
       width:90%;
       margin: .3rem auto;
       overflow:hidden;
       background-color: #ffffe0;
       position:relative;
     .Headlineimg{
       width:20%;
       height:60%;
       background: url("/static/image/toutiao.png") no-repeat center;
       background-size: contain;
       padding:.2rem;
     }
     .Headlinesi{
       width:10%;
       height:80%;
       position:absolute;
       top:.2rem;
       right:0;
     }
     .Headline{
       width:60%;
       height:2rem;
       margin:auto;
       text-align: left;
       animation:move 5s linear infinite;
        text-align:center;
        }
     span {
       margin:.2rem;
       color:black; padding:0;
       }
   }
   section{
      img
     {
       outline-width:0px;
       vertical-align:top;
     }
     .nav{
       width:90%;
       margin:auto;
       height:4.5rem;
       .times{
         width:100%;
         height:100%;
         border-radius:10px 10px  0 0 ;
         overflow-x:auto;
         scrollbar-width: none;
         .all{
           width:180%;
           height:100%;
           background-color: #ff6758;
           .time{
             width:14%;
             height:90%;
             float:left;
             color:#ffc5bf;
             font-size:20px;
             text-align: center;
             padding:.5rem 0 0 0;
             span{
               font-size:13px;
               // padding:0 .3rem;
               // border-radius:8px;
               // background-color: #fff;
             }
           }
         }
       }
     }
     .smallbody{
       width:100%;
       height:100%;
       overflow-x:auto;
       scrollbar-width: none;
       .type{
         width:190%;
         height:100%;
         .goods{
           width:11%;
           height:100%;
           float:left;
           font-size:13px;
           margin:0 .3rem;
           .howmuch{
             color:#f6452d;
             s{
               color:black;
             }
           }
         }
       }
     }
   .brands{
     padding:2rem 0 0 0;
     width:90%;
     margin:auto;
     font-size:18px;
     overflow:hidden;
     .brand{
       width:17.6%;
       float:left;
       margin:.05rem .2rem;
       border:1px solid gray;
     }
   }
   }
   footer{
     .partition{
       margin:1rem 0 0 0 ;
       width:100%;
       height:4rem;
       .footer{
         p{
           text-align:center;
           a{
             color:black;
             text-decoration: none;
           }
         }
         span{
           display: block;
           text-align: center;
         }
       }
     }
     .el{
      overflow-x:auto;
      .box{
        width:92%;
        margin:auto;
      }
      .detailed{
        width:45%;
        height:19rem;
        float:left;
        padding:.5rem;
        font-size:13px;
        p{
          width:40%;
          color:#fff;
          margin:0 0 0 -.5rem;
          position:relative;
          bottom:1rem;
          background-color: #ffc25f;
        }
        .price{
          color:#f6231c;
          font-size:18px;
          span{
            font-size:12px;
            color:gray;
          }
        }
      }
     }
   }
   .go-top{
     position:fixed;
     bottom:2rem;
     right:2rem;
   }
   .money{
     position:fixed;
     bottom:6rem;
     right:1rem;
   }
  }

</style>
