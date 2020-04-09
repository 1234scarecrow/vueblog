import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

// 配置路由字典
const routes = [
  // 首页
  {
    path: '/',
    component: Index,
    meta: {
      title: "1234稻草人-首页"
    }
  },
  // 以下为懒加载
  {
    path: '/note',
    component: () => import('../views/Note.vue'),
    meta: {
      title: '1234稻草人-笔记'
    }
  },
  {
    path: '/collect',
    component: () => import('../views/Collect.vue'),
    meta: {
      title: '1234稻草人-收藏'
    }
  },
  {
    path: '/jotting',
    component: () => import('../views/Jotting.vue'),
    meta: {
      title: '1234稻草人-随笔'
    }
  },
  {
    path: '/me',
    component: () => import('../views/Me.vue'),
    meta: {
      title: '1234稻草人-关于我'
    }
  },
  {
    path: '/addmood',
    component: () => import('../views/Addmood.vue'),
    meta: {
      title: '1234稻草人-添加状态'
    }
  },
  {
    path: '/addnote',
    component: () => import('../views/Addnote.vue'),
    meta: {
      title: '1234稻草人-添加笔记'
    }
  },
  {
    path: '/addjotting',
    component: () => import('../views/Addjotting.vue'),
    meta: {
      title: '1234稻草人-添加随笔'
    }
  },
  {
    path:'/addcollect',
    component:()=>import('../views/Addcollect.vue'),
    meta:{
      title:'1234稻草人-添加收藏'
    }
  },
  // 动态路由
    //  测试
    // {
    //   path: '/noteitem',
    //   component:()=>import('../views/noteitem.vue'),
    //   meta:{
    //     title:'1234稻草人-笔记详情'
    //   }
    // },
  {
    path: '/note/:id',
    component:()=>import('../views/noteitem.vue'),
    meta:{
      title:'1234稻草人-笔记'
    }
  },
  {
    path:'/jotting/:id',
    component:()=>import('../views/jottingitem.vue'),
    meta:{
      title:'1234稻草人-随笔'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 使用全局的导航守卫, 在进入每个路由组件前  修改单页面的标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = "1234稻草人的 blog"
  }
  next()  // 放行, 执行后续的路由
})

export default router
