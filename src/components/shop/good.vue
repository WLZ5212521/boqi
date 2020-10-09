<template>
  <body>
  	<nav>
  	  <div class="back" @click="goback"></div>
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="goods">商品</el-menu-item>
        <el-menu-item index="2" @click="details">详情</el-menu-item>
        <el-menu-item index="3" @click="evaluate">评价</el-menu-item>
      </el-menu>
  	</nav>
    <router-view></router-view>
    <div class="footer">
      <div class="Shopping" @click="panel"><img src="/static/image/Shopping.png" alt="">购物车</div>
      <div class="join" @click="drawer = true" type="primary">加入购物车</div>
      <div class="buy" @click="drawer = true" type="primary">立即购买</div>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        size="50%"
        :modal-append-to-body="false"
        :with-header="false"
         v-for='(shop,index) in shoplist' :key='index'>
        <div class="title">
          <div class="img" :style="{background:shop.img,backgroundSize: 'contain'}"></div>
          {{shop.text}}
          <div class="prise">
            {{shop.price}}元
            <span>{{shop.stock}}</span>
          </div>
        </div>
        <div class="num">
          购买数量
          <div class="changenum">
            <button @click="reducenums(shop.count)">-</button>
            {{totalNum}}
            <button @click="addnums(shop.count)">+</button>
          </div>
        </div>
        <div class="max">
          {{shop.max}}
        </div>
        <div class="footer">
          <div class="Shopping" @click="panel"><img src="/static/image/Shopping.png" alt="">购物车</div>
          <div class="join" @click='addToCart(shop)'>加入购物车</div>
          <div class="buy" >立即购买</div>
        </div>
      </el-drawer>
    </div>
    <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
    <router-link to="/shop/shopindex"><img src="/static/image/home.svg" alt="" width="10%" class="home"></router-link>
  </body>
</template>

<script>
  import json from '../../../static/good.js'
  import { mapGetters, mapActions ,mapState,mapMutations} from 'vuex';
  export default{
    data(){
      return{
        json:json,
        activeName: 'second',
        scrollTop: 0,
        btnFlag:false,
        drawer:false,
        direction: 'btt',
        // totalNum:1,
        // this.$store.state.totalNum
      }
    },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      goods(){
        this.$router.push('/shop/goods')
      },
      details(){
        this.$router.push('/shop/details')
      },
      evaluate(){
        this.$router.push('/shop/evaluate')
      },
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
      // reduce(){
      //     this.$store.state.totalNum--
      //     // console.log(this.$store.state.totalNum)
      // },
      // add(){
      //     this.$store.state.totalNum++
      // },
      ...mapActions(['addToCart']),
      panel(){
        this.$router.push("/shop/panel")
      },
       // ...mapMutations(["addnum","reducenum"]),
        ...mapActions(['addnums',"reducenums"]),
    },
    computed: {
         ...mapGetters(['shoplist']),
         // ...mapGetters(['totalPrice','totalNum']),
         ...mapState(["totalNum",'totalPrice'])
       },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop,true);
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    nav{
      width:100%;
      height:10vw;
      position:fixed;
      top:0;
      z-index: 10;
      background-color: #fff;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .el-menu{
        width:70%;
        height:100%;
        margin:auto;
        display:flex;
        justify-content: space-around;
        .el-menu-item{
          height:100%;
          line-height: 10vw;
          }
      }
    }
    .footer{
      display:flex;
      justify-content: flex-start;
      height:14vw;
      text-align: center;
      position:fixed;
      bottom:0;
      width:100%;
      .Shopping{
        width:20%;
        height:100%;
        font-size:3.8vw;
        background-color: #fff;
        img{
          width:40%;
          display:block;
          margin:.5vw auto;
        }
      }
      .join{
        background-color: #fea91f;
        line-height: 14vw;
        width:40%;
        color:#fff;
      }
      .buy{
        background-color: #fc4a00;
        line-height: 14vw;
        width:40%;
        color:#fff;
      }
    }
    .go-top{
      position:fixed;
      bottom:16vw;
      right:3vw;
      z-index: -1;
    }
    .home{
      position:fixed;
      bottom:16vw;
      left:3vw;
      z-index: -1;
    }
    .title{
      height:40%;
      padding:2vw;
      text-align: left;
      font-size:3.6vw;
        position:relative;
      .img{
        width:30%;
        height:100%;

        float:left;
      }
      .prise{
        position:absolute;
        bottom:20%;
        left:30%;
        color:red;
        width:66%;
        font-size:7vw;
        line-height: 7vw;
        span{
          display: block;
          float:right;
          font-size:3.6vw;
          color:gray;
        }
      }
    }
    .num{
      height:12vw;
      line-height: 8vw;
      padding:2vw;
      border-top:1px solid gray;
      border-bottom:1px solid gray;
      text-align: left;
      .changenum{
        float:right;
      }
    }
    .max{
      margin:2vw 0 0 0;
      text-align: right;
      color:#ef5236;
    }
  }
</style>
