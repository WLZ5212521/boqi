import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hotposts from '@/components/Hotposts'
import Recentreply from '@/components/Recentreply'
import newest from '@/components/newest'
import wiki from '@/components/wiki'
import dogmth from '@/components/dogmth'
import nextdog from '@/components/nextdog'
import finaldog from '@/components/finaldog'
import raise from '@/components/raise'
import medical from '@/components/medical'
import train from '@/components/train'
import complete from '@/components/complete'

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
    {
      path:"/wiki",
      name:"wiki",
      component:wiki,
    },
    {
      path:"/dogmth",
      name:"dogmth",
      component:dogmth,
      children:[
        {
           path:"/raise",
           name:"raise",
           component:raise,
        },
        {
           path:"/medical",
           name:"medical",
           component:medical,
        },
        {
           path:"/train",
           name:"train",
           component:train,
        },
      ],redirect:'/raise',
    },
    {
        path:"/nextdog",
        name:"nextdog",
        component:nextdog
    },
    {
        path:"/finaldog",
        name:"finaldog",
        component:finaldog
    },
    {
        path:"/complete",
        name:"complete",
        component:complete
    }
  ]
})
