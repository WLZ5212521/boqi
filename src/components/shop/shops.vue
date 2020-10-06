<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">我的商城订单</div>
    </nav>
    <el-tabs>
        <el-tab-pane label="全部" name="first">
          <div class="img">
            <img src="/static/image/FsefVjx7Wipwhk7CutLD_8y5Dn-H.png" alt="">
            抱歉，我们没有找到相关数据！
          </div>
        </el-tab-pane>
        <el-tab-pane label="待付款" name="second">
          <div class="img">
            <img src="/static/image/FsefVjx7Wipwhk7CutLD_8y5Dn-H.png" alt="">
            抱歉，我们没有找到相关数据！
          </div>
        </el-tab-pane>
        <el-tab-pane label="待发货" name="third">
          <div class="img">
            <img src="/static/image/FsefVjx7Wipwhk7CutLD_8y5Dn-H.png" alt="">
            抱歉，我们没有找到相关数据！
          </div>
        </el-tab-pane>
        <el-tab-pane label="待收货" name="fourth">
          <div class="img">
            <img src="/static/image/FsefVjx7Wipwhk7CutLD_8y5Dn-H.png" alt="">
            抱歉，我们没有找到相关数据！
          </div>
        </el-tab-pane>
        <el-tab-pane label="待评价" name="fiveth">
          <div class="img">
            <img src="/static/image/FsefVjx7Wipwhk7CutLD_8y5Dn-H.png" alt="">
            抱歉，我们没有找到相关数据！
          </div>
        </el-tab-pane>
      </el-tabs>
  </body>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      goback(){
        this.$router.push("/shop/home")
      },
    }
  }
</script>

<style lang="less">
  body{
    nav{
      width:100%;
      height:10vw;
      border-bottom:1px solid gray;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .text{
        width:60%;
        height:10vw;
        margin:auto;
        text-align: center;
        line-height: 10vw;
        font-size: 4.5vw;
      }
    }
    .el-tabs{
      // display:flex;
      // justify-content: space-around;
      padding:0 1vw;
    }
    .img{
      width:80%;
      margin:10vw auto;
      text-align: center;
      img{
        width:100%;
      }
    }
  }
</style>
