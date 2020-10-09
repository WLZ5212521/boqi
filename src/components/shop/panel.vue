<template>
  <body>
  	<nav>
  	  <div class="back" @click="goback"></div>
  	  <div class="text">购物车</div>
      <div class="btn-danger" @click='clearAllCart'>清空购物车</div>
  	</nav>
    <div class="panel" v-for='(shop,index) in cartProducts' :key='index'>
      <div class="title">{{shop.title}}</div>
      <div class="body">
        <div class="bodyimg" :style="{background:shop.img,backgroundSize: 'contain'}"></div>
        {{shop.text}}
        <div class="price">
          ￥{{shop.price}}
          <div class="btns">
            <button @click="reducenums(shop.count)">-</button>
            <span>{{$store.state.totalNum}}</span>
            <button @click="addnums(shop.count)">+</button>
          </div>
        </div>
      </div>
      <span class="del"  @click='delProduct(shop)'>删除</span>
    </div>
    <div class="none" v-if="!cartProducts.length">
      您的购物车空空如也...
    </div>
            <div class="item-wrapper">
              <!-- <p>25省满99元免运费(甘青蒙藏宁新除外)</p> -->
                <div class='item'>总数：
                    <strong>{{totalNum}}</strong>
                </div>
                <div class='item'>总价：
                    <strong>{{totalPrice}}</strong>
                </div>
            </div>
                <div class="settlement">结算</div>
  </body>
</template>

<script>
  import cart from './cart'; //已选商品的组件
  import { mapGetters, mapActions,mapState,mapMutations} from "vuex";
  export default{
    data(){
      return{
        // datas:[],
        // totalPrice:0,
        // totalNum: 13,
              // totalPrice: 342,
      }
    },
    components: {
      // product,
      cart,
      // info,
    },
    computed: {
            ...mapGetters(['cartProducts']), //页面中v-for的数据
         ...mapState(["totalNum",'totalPrice'])
        },
    // created () {
    //     // console.log(this.goods)
    //     // console.log(this.goods_obj)
    //     // console.log(this.goods_length)
    //     // console.log(this.$store.state.shop)  // 模块化 Vuex允许我们将 store 分割成模块（module）每个模块拥有自己的 state、mutation、action、getter、
    //   },
    methods:{
      goback(){
        this.$router.push("/shop/good")
      },
      ...mapActions(['delProduct']),
      ...mapActions(['clearAllCart']),
      ...mapActions(['addnums',"reducenums"]),
            // ...mapMutations(["addnum","reducenum"]),
    //   ...mapMutations([
    //       // 获取mutation中的方法可以通过mapMutations 辅助函数获取，也可以直接获取。
    //         'ADD_CART'
    //         // 'REDUCE_CART'
    //       ]),
    //       reduce_num (id) {
    //         // this.REDUCE_CART(id)
    //         this.$store.commit('REDUCE_CART', id) //也可以直接获取
    //       },
    //       add_num (id) {
    //         this.ADD_CART(id) //通过mapMutations 辅助函数获取
    //       }
    },
    // computed:{
    //   ...mapState([
    //       // 获取state中的数据可以通过mapState辅助函数获取，也可以直接获取 例：this.$store.state.goods
    //         'goods', 'totalPrice', 'totalNum'
    //       ]),
    //       ...mapGetters([
    //         'goods_obj', 'goods_length'
    //       ])
    // }
  }
</script>

<style lang="less">
  body{
    nav{
      width:100%;
      height:10vw;
      border-bottom:1px solid gray;
      position:relative;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .text{
        width:30%;
        height:10vw;
        margin:auto;
        text-align: center;
        line-height: 10vw;
        font-size: 4.5vw;
      }
      .btn-danger{
        position:absolute;
        top:20%;
        right:5%;
        font-size: 4vw;
        float:right;
      }
    }
    .panel{
      height:40vw;
      padding:1vw 4vw;
      .title{
        height:6vw;
        font-size: 4vw;
        margin-top:10vw;
      }
      .body{
        width:100%;
        height:24vw;
        font-size:4vw;
        .bodyimg{
          width:30%;
          height:100%;
          float:left;
        }
        .price{
          font-size: 7vw;
          color:red;
          width:70%;
          float:left;
          span{
            color:black;
            font-size:4.4vw;
          }
          .btns{
            float:right;
          }
        }
      }
      .del{
        display: block;
        float:right;
      }
    }
    .item-wrapper{
      position:fixed;
      bottom:0;
      left:0;
      background-color: #4d4d4d;
        height:16vw;
        padding:0 2vw;
      color:#fff;
        width:40%;
      .item{
        // float:left;
      }
    }
      .settlement{
        position:fixed;
        bottom:0;
        right:0;
        height:16vw;
        line-height: 16vw;
        width:60%;
        float:right;
        text-align: center;
        font-size:8vw;
        color:#fff;
        background-color:#fc4a00;
      }
    p{
      position:fixed;
      bottom:0;
      margin:0;
      background-color: #808080;
      color:#fff;

      font-size:3.4vw;
    }
  }
</style>

<!-- <template>
   <body>
   	<cart></cart>
     <div>
         <h4>已选商品</h4>
         <table class="table table-hover table-bordered">
             <thead>
                 <tr>
                     <th>id</th>
                     <th>名称</th>
                     <th>价格</th>
                     <th>数量</th>
                     <th>操作</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for='(shop,index) in cartProducts' :key='index'>
                     <td>{{shop.id}}</td>
                     <td>{{shop.name}}</td>
                     <td>{{shop.price}}</td>
                     <td>{{shop.num}}</td>
                     <td>
                         <div @click='delProduct(shop)' class="btn btn-danger btn-sm">删除</div>
                     </td>
                 </tr>
                 <tr v-if="!cartProducts.length">
                     <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
                 </tr>
             </tbody>
         </table>
     </div>
   </body>
 </template>

 <script>
   import cart from './cart'; //已选商品的组件
   import { mapGetters} from "vuex";
 export default {
   name: 'app',
   data() {
     return {
       // cartProducts: [],
     };
   },
     components: {
       // product,
       cart,
       // info,
     },
     computed: {
             ...mapGetters(['cartProducts']) //页面中v-for的数据
         },
 };
 </script> -->
