<template>
  <div class="body">

  <div class="backTo">
      <div @click="goBack" class="back"></div>
      <el-dropdown trigger="click" class="down" @command="handleCommand">
       <span class="el-dropdown-link">{{tit}}<i class="el-icon-arrow-down"></i></span>
         <el-dropdown-menu slot="dropdown" style="background-color: #5a5c63;">
          <el-dropdown-item v-for="dogs in dog" :command="dogs[1]" :class="pets" style="background:#5a5c63;color:#fff" @click.native='train'>{{dogs[0]}}</el-dropdown-item>
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
    name:'dogmth',
    data(){
      return{
        dog:[
          ['狗狗饲养','/raise'],['狗狗医疗','/medical'],['狗狗训练','/train']
        ],
        bg:'#484a52',
        tit:'狗狗饲养',
        pets:''
      }
    },
      methods: {
        goBack() {
          this.$router.push('/wiki');
        },
         handleCommand(command) {
          this.$router.push(command)
              },
        train:function(){
          this.tit=event.originalTarget.innerText
          pets:true;
        }
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
      .pets{
        background-color: #464850;
      }
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
