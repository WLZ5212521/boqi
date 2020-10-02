<template>
  <body>
  	<nav>
      <div class="box">
        <el-menu class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1"><a href="#Catstaple">猫咪主粮</a></el-menu-item>
          <el-menu-item index="2"><a href="#Dogstaple">狗狗主粮</a></el-menu-item>
          <el-menu-item index="3"><a href="#catsnacks">猫咪零食</a></el-menu-item>
          <el-menu-item index="4"><a href="#dogsnacks">狗狗零食</a></el-menu-item>
          <el-menu-item index="5"><a href="#repellent">驱虫护理</a></el-menu-item>
          <el-menu-item index="6"><a href="#health">营养保健</a></el-menu-item>
          <el-menu-item index="7"><a href="#supplies">日常用品</a></el-menu-item>
        </el-menu>
      </div>
    </nav>
    <div class="nextbox">
      <div class="back" @click="goback"></div>
      <div class="text">每满99减15元</div>
    </div>
    <img src="/static/image/FpbpBPiRff4WOfeU9jKXTnbtIF2k.jpg" alt="" width="100%">
    <img src="/static/image/Fm_pli_KFRqADsIutJaOHZIHKpKA.jpg" alt="" width="100%" id="Catstaple">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="全猫粮" name="first">
             <div class="boxa">
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
           <el-tab-pane label="幼猫粮" name="second">
             <div class="boxa">
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
           <el-tab-pane label="成猫粮" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/Fuj5rg9Quaiw7Q1du36XJfoRWf9P.jpg" alt="" width="100%" id="Dogstaple">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="全犬粮" name="first">
             <div class="boxa">
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
           <el-tab-pane label="幼犬粮" name="second">
             <div class="boxa">
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
           <el-tab-pane label="成犬粮" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/FkbkG0CKiY1F-H7AILukT5GU9Wsj.jpg" alt="" width="100%" id="catsnacks">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="肉类零食" name="first">
             <div class="boxa">
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
           <el-tab-pane label="休闲零食" name="second">
             <div class="boxa">
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
           <el-tab-pane label="猫草薄荷" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/FkbkG0CKiY1F-H7AILukT5GU9Wsj.jpg" alt="" width="100%" id="dogsnacks">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="肉类零食" name="first">
             <div class="boxa">
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
           <el-tab-pane label="磨牙洁齿" name="second">
             <div class="boxa">
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
           <el-tab-pane label="奶酪饼干" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/FpHWiJK-j9w859iEs0mSaFP0TF5T.jpg" alt="" width="100%" id="repellent">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="内外驱虫" name="first">
             <div class="boxa">
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
           <el-tab-pane label="综合护理" name="second">
             <div class="boxa">
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
           <el-tab-pane label="常备药品" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/FoLMuavuHC-cXMI3WilTJNBwfpm1.jpg" alt="" width="100%" id="supplies">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="生活日用" name="first">
             <div class="boxa">
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
           <el-tab-pane label="猫砂猫厕" name="second">
             <div class="boxa">
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
           <el-tab-pane label="猫狗玩具" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/FgTd8IvFre2uilB6-bjU-fQB6CW3.jpg" alt="" width="100%" id="health">
    <footer>
      <div class="partition">
          <el-tabs class="el" v-model="activeTab">
           <el-tab-pane label="综合营养" name="first">
             <div class="boxa">
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
           <el-tab-pane label="肠胃调理" name="second">
             <div class="boxa">
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
           <el-tab-pane label="美毛护肤" name="third">
             <div class="boxa">
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
          </el-tabs>
      </div>
    </footer>
    <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
    <img src="/static/image/gou_wu_che_1.svg" class="money" width="8%">
  </body>
</template>

<script>
  export default{
    data(){
      return{
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
        activeTab:"first",
        scrollTop: 0,
        btnFlag:false,
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop,true);
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
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
      },
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    nav{
      position:fixed;
      top:0;
      z-index:10;
      width:100%;
      overflow-x:auto;
      scrollbar-width: none;
      &::-webkit-scrollbar{
        display: none;
      }
      .box{
        width:163%;
        a{
          text-decoration: none;
        }
      }
    }
    .nextbox{
      background-color: #fff;
      margin:12vw 0 0 0;
      width:100%;
      height:11vw;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .text{
        width:60%;
        height:11vw;
        margin:auto;
        text-align: center;
        line-height: 11vw;
        font-size: 4.5vw;
        font-size:3.3vw;
      }
    }
    img{
      display:block;
    }
    footer{
      .partition{
        width:100%;
      }
      .el{
        width:100%;
        background-color: #fff;
        .el-tabs__item{
          width:80%;
          color:#fff;
          border-bottom:2px solid blue;
          background-color: #5e76fa;
          text-align: center;
        }
       .boxa{
         width:92%;
         margin:auto;
       }
       .detailed{
         width:45%;
         height:19rem;
         float:left;
         margin:1rem 0;
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
      right:2.5rem;
    }
  }
</style>
