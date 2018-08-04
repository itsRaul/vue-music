import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Recommend from 'view/recommend/recommend'
import Singer from 'view/singer/singer'
import Rank from 'view/rank/rank'
import Search from 'view/search/search'
import SingerDetail from '../components/singer-detail/singer-detail'
// const Recommend = (resolve) =>{
//   import('view/recommend/recommend').then((modlue)=>{
//     resolve(modlue)
//   })
// }

// const Singer = (resolve) =>{
//   import('view/singer/singer').then((modlue)=>{
//     resolve(modlue)
//   })
// }

// const Rank = (resolve) =>{
//   import('view/rank/rank').then((modlue)=>{
//     resolve(modlue)
//   })
// }

// const Search = (resolve) =>{
//   import('view/search/search').then((modlue)=>{
//     resolve(modlue)
//   })
// }
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
