<template>
  <body>
  	<div class="good" v-for="good in goods">
      <div class="img" :style="{background:good[0],backgroundSize:'contain'}">
        <div class="imgs" :style="{background:good[1],backgroundSize:'contain'}"></div>
      </div>
      <p>{{good[2]}}</p>
      <div class="label">
        <span>{{good[3]}}</span>
        <span>{{good[4]}}</span>
        <span>{{good[5]}}</span>
      </div>
      <div class="price">
        {{good[6]}}
        <span>{{good[7]}}</span>
        <p>
          {{good[8]}}
          <span>
            {{good[9]}}
          </span>
        </p>
      </div>
    </div>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        goods:[
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
          ['url(/static/image/shoppicpath11540359780_y.jpg) no-repeat center',"url(/static/image/nationalday.png) no-repeat center","金高丽SolidGold无谷物抗敏配方全猫粮12磅/5.44kg","直降￥82","波奇豆抵5%","全球购","￥358","￥340.1","32.9/斤","已售161557"],
        ]
      }
    }
  }
</script>

<style lang="less">
  body{
    width:98%;
    margin:auto;
    .good{
      width:100%;
      height:11rem;
      padding:.5rem 0;
      .img{
        width:40%;
        height:100%;
        float:left;
        .imgs{
          width:20%;
          height:20%;
          margin:.5rem 1rem;
        }
      }
      p{
        margin:0 0 2rem 0;
      }
      .label{
        width:58%;
        height:2rem;
        float:left;
        line-height: 2rem;
        span{
          color:red;
          border:1px solid red;
          border-radius:10px;
          padding:0 .4rem;
          font-size:12px;
        }
      }
      .price{
        color:#d8201e;
        font-weight:bold;
        font-size:18px;
        span{
          color:black;
          font-size:13px;
          margin:0 0 0 1rem;
          font-weight:normal;
        }
        p{
          color:gray;
          font-size:13px;
          font-weight:normal;
          margin:.5rem 0;
          span{
            color:gray;
          }
        }
      }
    }
  }
</style>
