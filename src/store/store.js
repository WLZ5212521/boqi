import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutation'
// import actions from './actions'
// import getters from './getters'
// import shop from './modules/shop'
// import {state,mutations,actions,getters} from "./modules/cart"
import cart from "./modules/cart"


Vue.use(Vuex);


// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })


// const state={
//   count:0,
//   carPanelData:[],
//   goods:[
//     {
//       id:"0",
//       title:"波奇商城自营商品",
//       img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
//       text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
//       price:"17",
//       num:0,
//       count:1,
//     },
//     {
//       id:"1",
//       title:"波奇商城自营商品",
//       img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
//       text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
//       price:"17",
//       num:0,
//       count:1,
//     },
//     {
//       id:"2",
//       title:"波奇商城自营商品",
//       img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
//       text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
//       price:"17",
//       num:0,
//       count:1,
//     },
//   ],
//   added:[],
//   totalPrice:0.00,
//   totalNum:0
// }
// // const getters={
// //   // datas:state=>state.dataes
// //   goods_obj: state => state.goods,
// //   goods_length: state => state.goods.length
// // }

// const mutations={

//   increment (state) {
//     state.count=1
//   },
//   reduce (state) {
//     state.count=0
//   },
//   // addCarPanelData(state,data){
//   //   let boff=true
//   //   state.carPanelData.forEach((goods)=>{
//   //     if(goods.sku_id===data.sku_id){
//   //       goods.count++
//   //       boff=false
//   //     }
//   //   })
//   //   if(boff){
//   //     let goodsData=data
//   //     Vue.set(goodsData,'count',1)
//   //     state.carPanelData.push(goodsData)
//   //   }
//   //   console.log(state.carPanelData)
//   // },
// }
console.log({...cart})

export default new Vuex.Store({
  // modules:{
  //   cart
  // }
  // state,mutations
  // state,
  // mutations,
  // actions,
  // getters
  ...cart
})
