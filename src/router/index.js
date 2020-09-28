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
import big from '@/components/big'
import middle from '@/components/middle'
import small from '@/components/small'
import nextbigdog from '@/components/nextbigdog'
import article from '@/components/article/article'
import ui from '@/components/article/ui'
import album from '@/components/article/album'
import videos from '@/components/article/videos'
import qa from '@/components/article/qa'
import articles from '@/components/article/articles'
import interaction from '@/components/article/interaction'
import Send from '@/components/article/Send'
import shopindex from '@/components/shop/shopindex'
import nine from '@/components/shop/nine'


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
    },
    {
        path:"/big",
        name:"big",
        component:big
    },
    {
        path:"/middle",
        name:"middle",
        component:middle
    },
    {
        path:"/small",
        name:"small",
        component:small
    },
    {
        path:"/nextbigdog",
        name:"nextbigdog",
        component:nextbigdog
    },
    {
        path:"/article/article",
        name:"article",
        component:article
    },
    {
        path:"/article/ui",
        name:"ui",
        component:ui,
        children:[
          {
              path:"/article/album",
              name:"album",
              component:album,
          },
          {
              path:"/article/videos",
              name:"videos",
              component:videos,
          },
          {
              path:"/article/qa",
              name:"qa",
              component:qa,
          },
          {
              path:"/article/articles",
              name:"articles",
              component:articles,
          },
          {
              path:"/article/interaction",
              name:"interaction",
              component:interaction,
          },
        ],redirect:'/article/album',
    },
    {
        path:"/article/Send",
        name:"Send",
        component:Send
    },
    {
        path:"/shop/shopindex",
        name:"shopindex",
        component:shopindex,
        children:[
          {
              path:"/shop/nine",
              name:"nine",
              component:nine
          },
        ],redirect:'/shop/nine',
    },

  ]
})
