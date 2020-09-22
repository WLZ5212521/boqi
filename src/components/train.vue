<template>
  <div class="body">
    <div class="title" v-for="dog in dogs">
      <div class="dogimg" :style="{background:dog[0],backgroundSize:'cover',}"></div>
      <h3>{{dog[1]}}</h3>
      <span>作者：{{dog[2]}}</span><br>
      <span>{{dog[3]}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:"train",
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
          ['url(/static/image/dog.jpg)','狗狗蛋糕微博—狗狗可以吃蛋糕吗','三三6','2020-07-28 16:58']
        ]
      }
    }
  }
</script>

<style lang="less">
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
</style>
