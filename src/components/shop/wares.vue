<template>
  <body>
  	<nav>
      <div class="close" @click="close"></div>
      <div class="search">
        <from>
          <input type="search" placeholder="请输入搜索关键字" style="outline:none;border:0px;" class="ipt">
        </from>
      </div>
        <div class="hunt"></div>
    </nav>
        <img src="/static/image/bfstVxvw.jpg" alt="" width="100%">
    <div class="content">
      <el-menu class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1" @click="classification">分类</el-menu-item>
        <el-menu-item index="2" @click="sales">销量</el-menu-item>
        <el-menu-item index="3" @click="price">价格</el-menu-item>
        <el-menu-item index="4" @click="comment">评论</el-menu-item>
      </el-menu>
    </div>
      <router-view></router-view>
      <img src="/static/image/backtop.svg" v-if="btnFlag" class="go-top" @click="backTop" width="10%">
      <router-link to="/shop/shopindex"><img src="/static/image/home.svg" alt="" width="10%" class="home"></router-link>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        scrollTop: 0,
        btnFlag:false,
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop,true);
    },
    methods:{
      close(){
        this.$router.push("/shop/shopindex")
      },
      classification(){
        this.$router.push('/shop/classification')
      },
      sales(){
        this.$router.push('/shop/sales')
      },
      price(){
        this.$router.push('/shop/price')
      },
      comment(){
        this.$router.push('/shop/comment')
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
    width:100%;
    height:3rem;
    border-bottom:2px solid #e2e2e2;
    background-color: #fff;
    position:fixed;
    top:0;
    .close{
      width:5%;
      height:40%;
      margin:.8rem 1rem .6rem .2rem;
      float:left;
      background: url("/static/image/back.svg") no-repeat center;
    }
    [type=search]{
      width:84%;
      padding:.9rem 3rem .6rem 0;
    }
    .hunt{
      width:8%;
      height:50%;
      position:absolute;
      top:.7rem;
      right:5rem;
      background: url("/static/image/search.png") no-repeat center;
      background-size:contain;
    }
  }
  .content{
    width:100%;
	.el-menu{
	  display:flex;
	  justify-content: space-between;
	}
  }
  .go-top{
    position:fixed;
    bottom:2rem;
    right:2rem;
  }
  .home{
    position:fixed;
    bottom:2rem;
    left:2rem;
  }
  }

</style>
