import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hotposts from '@/components/Hotposts'
import Recentreply from '@/components/Recentreply'
import newest from '@/components/newest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:"/Recentreply",
          name:'Recentreply',
          component:Recentreply
        },
        {
          path:'/newest',
          name:'newest',
          component:newest
        },
        {
          path:'/Hotposts',
          name:'Hotposts',
          component:Hotposts
        }
      ],redirect:'/Hotposts',


    },

  ]
})
