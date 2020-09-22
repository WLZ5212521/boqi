<template>
  <div class="body">

  <div class="backTo">
      <div @click="goBack" class="back"></div>
      <el-dropdown trigger="click" class="down" @command="handleCommand">
       <span class="el-dropdown-link">{{dogs[0]}}<i class="el-icon-arrow-down"></i></span>
         <el-dropdown-menu slot="dropdown" style="background-color: #5a5c63;">
          <el-dropdown-item v-for="dogs in dog" :command="dogs[1]" :style='background:bg'>{{dogs[0]}}</el-dropdown-item>
          <!-- <el-dropdown-item style="color: #fff;" command="/medical" @click="medical">狗狗医疗</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/train">狗狗训练</el-dropdown-item> -->
         </el-dropdown-menu>
      </el-dropdown>
  </div>
  <br>
  <br>
  <br>
  <br>
  <router-view></router-view>
    <router-link to="/dogmth"><div class="dogup">上一页</div></router-link>
    <router-link to="/nextdog"><div class="dogdown">下一页</div></router-link>
    <br><br>
  </div>
</template>

<script>
  export default {
    name:'dogmth'
      methods: {
        goBack() {
          this.$router.go(-1);
          console.log(this)
        },
         handleCommand(command) {
          this.$router.push(command)
          // var link=document.querySelector(".el-dropdown-link")
          // var medical=document.querySelector(".medical")
                // console.log(this)
                // link.innerText=medical.innerText
              },
      },
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
