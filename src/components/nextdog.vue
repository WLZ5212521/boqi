<template>
  <div class="body">

  <div class="backTo">
      <div @click="goBack" class="back"></div>
      <el-dropdown trigger="click" class="down" @command="handleCommand">
       <span class="el-dropdown-link">狗狗饲养<i class="el-icon-arrow-down"></i></span>
         <el-dropdown-menu slot="dropdown" style="background-color: #5a5c63;">
          <el-dropdown-item style="color: #fff;background-color: #484a52;" command="/raise">狗狗饲养</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/medical">狗狗医疗</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/train">狗狗训练</el-dropdown-item>
         </el-dropdown-menu>
      </el-dropdown>
  </div>
  <br>
  <br>
  <br>
  <br>
    <div class="title" v-for="dog in dogs">
      <div class="dogimg" :style="{background:dog[0],backgroundSize:'cover',}"></div>
      <h3>{{dog[1]}}</h3>
      <span>作者：{{dog[2]}}</span><br>
      <span>{{dog[3]}}</span>
    </div>
    <router-link to="/dogmth"><div class="dogup">上一页</div></router-link>
    <router-link to="/finaldog"><div class="dogdown">下一页</div></router-link>
    <br><br>
  </div>
</template>

<script>
  export default {
      methods: {
        goBack() {
          this.$router.go(-1);
        },
         handleCommand(command) {
          this.$router.push(command)
                console.log(this)
              }
      },
      data(){
        return{
          dogs:[
            ['url(/static/image/dog.jpg)','对猫咪无毒的植物-哪些植物对猫有害？','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','巴西龟病症治疗—关于巴西龟的若干病症','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','德牧死胎的原因—造成死胎的原因是什么','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','对猫咪无毒的植物-哪些植物对猫有害？','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','巴西龟病症治疗—关于巴西龟的若干病症','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','狗狗蛋糕微博—狗狗可以吃蛋糕吗','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','对猫咪无毒的植物-哪些植物对猫有害？','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','兔子睡什么地方好—兔子最好睡在什么地方','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','对猫咪无毒的植物-哪些植物对猫有害？','三三6','2020-07-28 16:58'],
            ['url(/static/image/dog.jpg)','犬性冠状病毒—狗狗得了冠状病毒严重吗','三三6','2020-07-28 16:58']
          ]
        }
      }
    }
</script>

<style lang="less">
  .backTo{
    background-color: #fff;
    width:100%;
    height:5rem;
    border-bottom:.1rem solid gray;
    position:fixed;
    .back{
      width:10%;
      float:left;
      height:100%;
      background: url("/static/image/back.svg") center no-repeat;
    }
    .down{
      width:24%;
      position:relative;
      left:30%;
      top:50%;
      .el-dropdown-link{
        color:black;
        font-size:18px;
        font-weight:bold;
      }
    }
  }
  .title{
    width:90%;
    height:5rem;
    margin:.5rem 0;
    h3{
      margin:.4rem 0;
      text-overflow: ellipsis;
      white-space:nowrap;
      overflow: hidden;
      font-weight:normal;
    }
    span{
      font-size: 12px;
      color:#989898;
    }
    .dogimg{
      margin:0 .2rem;
      width:25%;
      height:100%;
      float:left;
    }
  }
  .dogup{
    width:45%;
    height:2rem;
    color:black;
    background-color: #e5e5e5;
    text-align: center;
    line-height: 2rem;
    float:left;
  }
  .dogdown{
    width:45%;
    height:2rem;
    color:black;
    background-color: #e5e5e5;
    text-align: center;
    line-height: 2rem;
    float:right;
  }
</style>
