//初始化数据
const state = {
      shop_list: [
        {
          id:0,
          title:"波奇商城自营商品",
          img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
          text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
          price:17,
          num:0,
          count:1,
          max:"限购99件",
          stock:"库存157件",
        },
        {
          id:1,
          title:"波奇商城自营商品",
          img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
          text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
          price:17,
          num:0,
          count:1,
          max:"限购99件",
          stock:"库存157件",
        },
        {
          id:2,
          title:"波奇商城自营商品",
          img:"url('/static/image/shoppicpath11540373092_y.jpg') no-repeat center",
          text:"黑鼻头 犬用海藻黑芝麻牛肉条500g 狗零食训练奖励美毛增色",
          price:17,
          num:0,
          count:1,
          max:"限购99件",
          stock:"库存157件",
        },
      ],
      totalNum:0  ,
      totalPrice:0,
      added:[],
      count:0,
        carPanelData:[],
      };

//getter 抛出去的数据
const getters = {
  shoplist:state => state.shop_list,
  cartProducts:state=>{
          return state.added.map(({id,num})=>{ //在actions中只有的id和num的字段
              //在原始数据数据上面进行刷选，这里通过id来匹配
              let product = state.shop_list.find(n=>n.id == id)
              // console.info('product',product)
              return {
                  ...product,
                  num
              }
          })
      },
      //计算总价
         // totalPrice:(state,getters)=>{  //getter中可以调用getter里面的方法，文档有介绍
         //     let total = 0;
         //     getters.cartProducts.forEach(n=>{
         //         total += n.price * n.num
         //     })
         //     return total;
         // },
      //    //计算总数量
      //    totalNum:(state,getters)=>{
      //        let total = 0;
      //        getters.cartProducts.forEach(n=>{
      //            total += n.num
      //        })
      //        return total;
      //    },
};

//action 异步的操作
const actions = {
  addToCart({commit},product){
          commit('add',{  //传递一个add的方法，携带参数id
              id:product.id
          })
      },
    //清除购物车
        clearAllCart({commit}){
            commit('clearAll') //分发一个clearAll事件，不带参数进行
        },
    //删除购物车的指定的商品
        delProduct({commit},product){
            commit('del',product)//commit del的方法
        },
        addnums({commit}){
          commit("addnum")
        },
        reducenums({commit}){
          commit("reducenum")
        }
};

//mutation
const mutations = {
  increment (state) {
      state.count=1
    },
    reduce (state) {
      state.count=0
    },
  add(state,{id}){  //解构id 你可以 测试id 和 {id}的区别
      let record = state.added.find(n=>n.id == id);
          if(!record){
              state.added.push({
                  id,
                  num:1
              })
          }else {
              record.num++
          }
          console.info(record,state.added)
        },
      //清除购物车
          clearAll(state){
              state.added = []
          },
      //删除购物车的指定的商品
          del(state,product){
              //console.info(state,product)
              state.added.forEach((n,i)=>{
                  if(n.id == product.id){
                      //console.info(11,n)
                      //找到下标值
                      state.added.splice(i,1)
                  }
              })
          },
          addnum(state) {
              console.log(1)
              console.log(state.totalNum)
              console.log(state.totalPrice)
            if(state.totalNum <99){
              state.totalNum++
              state.totalPrice += state.shop_list[0].price
            }

          },
          reducenum(state) {
              console.log(1)
              console.log(state.totalNum)
              console.log(state.totalPrice)
            if(state.totalNum >0){
              state.totalNum--
              state.totalPrice -= state.shop_list[0].price
              // console.log(state.totalPrice)
            // }
            // totalNum++
              }
          },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
