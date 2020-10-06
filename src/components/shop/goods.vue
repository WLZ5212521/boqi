<template>
  <body>
  	<div class="head">
      <div class="img">
        <wc-swiper class="swiper" height="30vw">
          <wc-slide v-for="item in items" >
            <img :src="item" width="80%">
          </wc-slide>
        </wc-swiper>
      </div>
      <div class="title">{{json.data.title}}</div>
      <div class="price">
        {{json.data.nowprice}}
        <s>{{json.data.oldprice}}</s>
        <span>{{json.data.boqidou}}</span>
        <div class="discount">{{json.data.discounttext}}</div>
        <div class="sold">{{json.data.sold}}
          <div class="file" @click="file">|{{json.data.file}}</div>
        </div>
      </div>
      <router-link to="/shop/vip"><div class="vip">
        <span></span>{{json.data.viptext}}
        <div class="open">开卡></div>
      </div></router-link>
      <div class="explain" @click="explain">
        <div class="explains">说明</div>
        <div class="explainensure">{{json.data.explainensure}}</div>
        <div class="explainshipping">{{json.data.explainshipping}}</div>
        <div class="explainreturn">{{json.data.explainreturn}}</div>
      </div>
      <div class="Promotion">
        <div class="youhui">促销</div>
        <span>直降</span>
        {{json.data.promotion}}
      </div>
    </div>
    <p></p>
    <div class="satisfied">
      <div class="satisfie">
        全部评价({{json.data.satisfiednum}})
        <div class="satisfies">满意度{{json.data.satisfiesnum}}</div>
      </div>
    </div>
    <div class="alluser" v-for="(all,key) in alls" v-show="key<num">
      <div class="allimg">
        <div class="allimgs" :style="{background:all[0],borderRadius:'50% 50%',backgroundSize:'cover'}"></div>
        <div class="allusername">
          {{all[1]}}
          <el-rate v-model="all[2]" disabled text-color="#ff9900"></el-rate>
          <div class="alltime">{{all[3]}}</div>
        </div>
      </div>
      <div class="allcontent">
        <div class="allcontents">{{all[4]}}</div>
        <img :src="all[5]" alt="" width="10%">
      </div>
    </div>
    <router-link to="/shop/evaluate"><div class="more">查看全部</div></router-link>
    <div class="shops">
      <div class="shopstop">
        <div class="shopsimg"></div>
        黑鼻头
        <div class="joinin">进入品牌</div>
      </div>
      <div class="shopsbottom">
        <div class="allshops">
          {{json.data.allshopsnum}}
          <p>全部商品</p>
        </div>
        <div class="Promotion">
          {{json.data.Promotionnum}}
          <p>促销商品</p>
        </div>
        <div class="follow">
          {{json.data.follownum}}
          <p>关注人数</p>
        </div>
      </div>
    </div>
    <table frame=void>
      <tr>
        <td>{{json.data.table.number}}</td>
        <td>{{json.data.table.num}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.type}}</td>
        <td>{{json.data.table.typ}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.norms}}</td>
        <td>{{json.data.table.norm}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.object}}</td>
        <td>{{json.data.table.obj}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.formula}}</td>
        <td>{{json.data.table.formul}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.component}}</td>
        <td>{{json.data.table.components}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.quality}}</td>
        <td>{{json.data.table.quali}}</td>
      </tr>
      <tr>
        <td>{{json.data.table.weight}}</td>
        <td>{{json.data.table.weights}}</td>
      </tr>
    </table>
    <img :src="json.data.img1" alt="" width="100%">
    <img :src="json.data.img2" alt="" width="100%">
    <img :src="json.data.img3" alt="" width="100%">
    <img :src="json.data.img4" alt="" width="100%">
    <img :src="json.data.img5" alt="" width="100%">
    <img :src="json.data.img6" alt="" width="100%">
    <img :src="json.data.img7" alt="" width="100%">
    <img :src="json.data.img8" alt="" width="100%">
    <img :src="json.data.img9" alt="" width="100%">
    <img :src="json.data.img10" alt="" width="100%">
    <img :src="json.data.img11" alt="" width="100%">
    <img :src="json.data.img12" alt="" width="100%">
    <img :src="json.data.img13" alt="" width="100%">
    <div class="Pricedescription">
      <ul>
      	<li>价格说明</li>
      </ul>
      <p>{{json.data.consult}}</p>
      <p>{{json.data.standard}}</p>
    </div>

  </body>
</template>

<script>
  import json from '../../../static/good.js'
  export default{
    data(){
      return{
         json:json,
        items:[
          "/static/image/shoppicpath11540373092_y.jpg","/static/image/shoppicpath31509679334_y.jpg","/static/image/shoppicpath21509679334_y.jpg",
          "/static/image/shoppicpath41509679334_y.jpg","/static/image/shoppicpath51509679335_y.jpg",
        ],
        alls:[
          [json.data.allbgimg,json.data.alusername,json.data.allvalue,json.data.alltime,json.data.allcontent,json.data.allimg],
          [json.data.allbgimg,json.data.alusername,json.data.allvalue,json.data.alltime,json.data.allcontent,json.data.allimg],
          [json.data.allbgimg,json.data.alusername,json.data.allvalue,json.data.alltime,json.data.allcontent,json.data.allimg],
          ],
        isShow: true,
        num: 3,
      }
    },
    methods:{
      file(){
        this.$alert("","",{
          message:'<img src="/static/image/shopauthorize_pic1577781467_y.jpg" width="100%">',
          dangerouslyUseHTMLString:true,
          center:true,
          showClose:false,
        })
      },
      explain(){
        this.$alert("","",{
          title:"服务说明",
          message:"<p>正品保证 <br>全场正品 假一罚十</p><br><p>25省满99元免运费 <br>25省满99元免运费(甘青蒙藏宁新除外)</p><br><p>7天无忧退换 <br>消费者在满足7天无理由退换申请条件的前提下，可以提出“7天无理由退换”的申请（全球购除外）</p>",
          dangerouslyUseHTMLString:true,
          confirmButtonText:"我知道了",
          showClose:false,
        })
      }
    }
  }
</script>

<style lang="less">
  body{
    width:100%;
    .head{
      width:96%;
      margin:10vw auto 0;
      border-bottom:1px solid gray;
      .img{
        width:100%;
        margin:auto;
        img{
          display:block;
          margin:auto;
        }
      }
      .title{
        margin:2vw 0;
        font-size:3.8vw;
      }
      .price{
        color:#eb1105;
        font-size:5vw;
        s,span{
          color:gray;
          font-size:3.6vw;
        }
        .discount,.sold{
          color:gray;
          font-size:3.9vw;
        }
        .file{
          float:right;
        }
      }
      .vip{
        margin:2vw 0;
        padding:1vw 2vw;
        color:#e6d5ac;
        border-radius:5px;
        height:10vw;
        line-height:10vw;
        font-size:3.6vw;
        background-color: #3f3735;
        span{
          padding:2vw;
          margin:0 2vw 0 0;
          background: url(/static/image/c13b5e86.ico-card1.png) center no-repeat;
          background-size: contain;
        }
        .open{
          float:right;
        }
      }
      .explain{
        height:12vw;
        border-bottom:1px solid gray;
        .explains,.explainensure,.explainshipping,.explainreturn{
          float:left;
        }
        .explains{
          color:gray;
          height:10vw;
          margin:0 2vw 0 0 ;
        }
        .explainensure,.explainshipping,.explainreturn{
          width:40%;
          font-size:3.8vw;
        }
      }
      .Promotion{
        height:12vw;
        line-height: 12vw;
        color:gray;
        font-size:3.8vw;
        .youhui{
          float:left;
          font-size:5vw;
          margin:0 4vw 0 1vw;
          color:#272727;
        }
        span{
          color:red;
          border:1px solid red;
          padding:.1vw .8vw;
          border-radius:5px;
          margin:0 4vw 0 0;
        }
      }
    }
    .satisfied{
      .satisfie{
        height:14vw;
        line-height: 14vw;
        font-size:3.8vw;
        color:#666666;
        border-top:1px solid gray;
        border-bottom:1px solid gray;
        padding:0 6vw;
        .satisfies{
          float:right;
        }
      }
    }
    .alluser{
      font-size:3.3vw;
      color:#676767;
      padding:1vw 2vw;
      border-bottom:1px solid gray;
      .allimg{
        width:100%;
        height:10vw;
        .allimgs{
          width:10%;
          height:100%;
          float:left;
          margin-right:2vw;
        }
        .el-rate{
          display:inline;
          .el-rate__icon{
            margin:0;
          }
        }
      }
      .allcontent{
        width:76%;
        margin:3vw auto;
      }
    }
    .more{
      text-align: center;
      height:14vw;
      line-height: 14vw;
      border-bottom:1px solid gray;
      color:gray;
    }
    a{
      text-decoration: none;
    }
    .shops{
      height:30vw;
      .shopstop{
        height:16vw;
        line-height: 16vw;
        padding:0 5vw;
        .shopsimg{
          width:18%;
          height:100%;
          background: url("/static/image/shopbrand_logo_app1521773613_thumb.jpg") center;
          background-size: contain;
          float:left;
        }
        .joinin{
          float:right;
          color:#fff;
          padding:2vw 3vw;
          margin:3vw;
          line-height: 6vw;
          background-color: #fc4a00;
        }
      }
      .shopsbottom{
        display:flex;
        justify-content: space-around;
        text-align: center;
        p{
          margin:0;
        }
      }
    }
    table{
      clear:both;
      width:98%;
      margin:auto;
      margin:10vw 0 0 0;
      font-size:3.5vw;
      border-collapse:collapse;
    }
    td{
      padding:0 2vw;
      border:1px solid #767676;
    }
    tr{
      height:18vw;
    }
    td:first-child{
      color:gray;
      width:20vw;
    }
    img{
      display:block;
    }
    .Pricedescription{
      padding:0 4vw 26vw 4vw;
      font-size:3vw;
      color:gray;
      ul{
        padding:0;
        font-size:2.8vw;
        list-style-position: inside;
      }
    }
  }
</style>
