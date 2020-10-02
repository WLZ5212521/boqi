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
import eleven from '@/components/shop/eleven'
import thirteen from '@/components/shop/thirteen'
import fifteen from '@/components/shop/fifteen'
import seventeen from '@/components/shop/seventeen'
import nineteen from '@/components/shop/nineteen'
import twenty from '@/components/shop/twenty'
import search from '@/components/shop/search'
import wares from '@/components/shop/wares'
import classification from '@/components/shop/classification'
import sales from '@/components/shop/sales'
import price from '@/components/shop/price'
import comment from '@/components/shop/comment'
import sign from '@/components/shop/sign'
import user from '@/components/shop/user'
import register from '@/components/shop/register'
import forget from '@/components/shop/forget'
import vip from '@/components/shop/vip'
import treasure from '@/components/shop/treasure'
import subscribe from '@/components/shop/subscribe'
import Catstaple from '@/components/shop/Catstaple'
import Dogstaple from '@/components/shop/Dogstaple'
import snacks from '@/components/shop/snacks'
import repellent from '@/components/shop/repellent'
import discount from '@/components/shop/discount'
import Bargain from '@/components/shop/Bargain'



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
          {
              path:"/shop/eleven",
              name:"eleven",
              component:eleven
          },
          {
              path:"/shop/thirteen",
              name:"thirteen",
              component:thirteen
          },
          {
              path:"/shop/fifteen",
              name:"fifteen",
              component:fifteen
          },
          {
              path:"/shop/seventeen",
              name:"seventeen",
              component:seventeen
          },
          {
              path:"/shop/nineteen",
              name:"nineteen",
              component:nineteen
          },
          {
              path:"/shop/twenty",
              name:"twenty",
              component:twenty
          },
        ],redirect:'/shop/nine',
    },
    {
        path:"/shop/search",
        name:"search",
        component:search
    },
    {
        path:"/shop/wares",
        name:"wares",
        component:wares,
        children:[
          {
              path:"/shop/classification",
              name:"classification",
              component:classification
          },
          {
              path:"/shop/sales",
              name:"sales",
              component:sales
          },
          {
              path:"/shop/price",
              name:"price",
              component:price
          },
          {
              path:"/shop/comment",
              name:"comment",
              component:comment
          },
        ],redirect:'/shop/classification',
    },
    {
        path:"/shop/sign",
        name:"sign",
        component:sign
    },
    {
        path:"/shop/user",
        name:"user",
        component:user
    },
    {
        path:"/shop/register",
        name:"register",
        component:register
    },
    {
        path:"/shop/forget",
        name:"forget",
        component:forget
    },
    {
        path:"/shop/vip",
        name:"vip",
        component:vip
    },
    {
        path:"/shop/treasure",
        name:"treasure",
        component:treasure
    },
    {
        path:"/shop/subscribe",
        name:"subscribe",
        component:subscribe,
        children:[
          {
              path:"/shop/Dogstaple",
              name:"Dogstaple",
              component:Dogstaple
          },
          {
              path:"/shop/Catstaple",
              name:"Catstaple",
              component:Catstaple
          },
          {
              path:"/shop/snacks",
              name:"snacks",
              component:snacks
          },
          {
              path:"/shop/repellent",
              name:"repellent",
              component:repellent
          },
        ],redirect:'/shop/Dogstaple',
    },
    {
        path:"/shop/discount",
        name:"discount",
        component:discount
    },
    {
        path:"/shop/Bargain",
        name:"Bargain",
        component:Bargain
    },

  ]
})
