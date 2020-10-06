import Vue from 'vue'
import Vuex from 'vuex'


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


const state={
  count:0
}
const mutations={
  increment (state) {
    state.count=1
  },
  reduce (state) {
    state.count=0
  }
}

export default new Vuex.Store({
  state,mutations
})
