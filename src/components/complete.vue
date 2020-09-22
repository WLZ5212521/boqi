<template>
  <div class="body">
    <nav>
      <div @click="goBack" class="back"></div>
      <h3>狗狗大全</h3>
      <el-dropdown trigger="click" class="down" @command="handleCommand">
       <span class="el-dropdown-link">筛选<i class="el-icon-arrow-down"></i></span>
         <el-dropdown-menu slot="dropdown" style="background-color: #5a5c63;">
          <el-dropdown-item style="color: #fff;background-color: #484a52;" command="/raise">全部</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/medical"class="medical">小型犬</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/train">中型犬</el-dropdown-item>
          <el-dropdown-item style="color: #fff;" command="/train">大型犬</el-dropdown-item>
         </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </div>
</template>

<script>
  export default {
      methods: {
        goBack() {
          this.$router.go(-1);
        },
      },
    }
</script>

<style lang="less">
  .body{
    margin:.1rem;
    nav{
        border:1px solid red;
      width:100%;
      height: 5rem;
      .back{
        border:1px solid red;
        width:10%;
        float:left;
        height:100%;
        background: url("/static/image/back.svg") center no-repeat;
      }
      h3{
        position:relative;
        top:20%;
        left:28%;
      }
      // .down{
      //   font-size:16px;
      //   color:green;
      //   position:relative;
      //   bottom:80%;
      //   left:77%;
      // }
    }
  }

</style>
