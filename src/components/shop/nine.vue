<template>
  <div class="bigbody">
    <div class="smallbody">
      <div class="type">
        <div class="goods" v-for="good in goods">
          <img :src="good[0]" alt="" width="100%"><br>
          {{good[1]}} <br>
          <div class="howmuch">{{good[2]}} <s>{{good[3]}}</s></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default{
    data(){
      return{
        goods:[
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
          ["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],["/static/image/gouliang.jpg","伊丽Elite鹿角猫窝爬架猫玩宠物有氧","￥152.3","￥321.6"],
        ]
      }
    }
  }
</script>

<style lang="less">
  .bigbody{
    width:100%;
    height:11rem;
    .smallbody{
      width:100%;
      height:100%;
      overflow-x:auto;
      scrollbar-width: none;
      .type{
        width:190%;
        height:100%;
        .goods{
          width:11.9%;
          height:100%;
          float:left;
          font-size:13px;
          margin:0 .1rem;
          .howmuch{
            color:#f6452d;
            s{
              color:black;
            }
          }
        }
      }
    }
  }
</style>
