<template>
  <div class="body">
    <nav>
      <div @click="goBack" class="back"></div>
      <h3>狗狗大全</h3>
      <el-dropdown trigger="click" class="down" @command="handleCommand">
       <span class="el-dropdown-link">筛选<i class="el-icon-arrow-down"></i></span>
         <el-dropdown-menu slot="dropdown" style="background-color: #5a5c63;">
          <el-dropdown-item v-for="dog in dogs" style="color: #fff;background-color: #484a52;" :command="dog[0]">{{dog[1]}}</el-dropdown-item>
         </el-dropdown-menu>
      </el-dropdown>
    </nav>
    <body>
      <div class="everydog" v-for="item in items">
      <div class="smalldog" :style="{background:item[0],backgroundSize:'cover',width:'100%',height:'100%'}"><div>{{item[1]}}</div></div>
      </div>

      <router-link to="/big"><div class="dogup">上一页</div></router-link>
      <router-link to="/nextbigdog"><div class="dogdown">下一页</div></router-link>
    </body>

  </div>
</template>

<script>
  export default {
    name:'complete',
    data(){
      return{
      items:[
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],['url(/static/image/bigdog.jpg) center no-repeat','柴犬'],
        ['url(/static/image/bigdog.jpg) center no-repeat','柴犬']
      ],
      dogs:[
        ['/','全部'],['/big','大型犬'],['/middle','中型犬'],['/small','小型犬']
      ]
      }
    },
      methods: {
        goBack() {
          this.$router.go(-1);
        },
        handleCommand(command) {
          this.$router.push(command)
          console.log(command)
              },
      },
    }
</script>

<style lang="less">
  .body{
    margin:.1rem;
    nav{
      width:100%;
      height: 5rem;
      .back{
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
      .down{
        font-size:18px;
        color:green;
        position:relative;
        bottom:75%;
        left:75%;
      }
    }
   body{
     margin:.1rem;
    .everydog{
      width:30%;
      height:6rem;
      position:relative;
      float:left;
      margin:.3rem;
      div{
        width:100%;
        text-align: center;
        color:#fff;
        background-color: #a8a7a58f;
        position:absolute;
        bottom:0;
        right:0;
      }
    }
    .dogup{
      margin:1rem 0;
      width:45%;
      height:2rem;
      color:black;
      background-color: #e5e5e5;
      text-align: center;
      line-height: 2rem;
      float:left;
    }
    .dogdown{
      margin:1rem 0;
      width:45%;
      height:2rem;
      color:black;
      background-color: #e5e5e5;
      text-align: center;
      line-height: 2rem;
      float:right;
    }
   }
  }

</style>
