import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404.vue'
import Home from '../views/home'
import Main from '@/views/main.vue'
import Airport from '@/views/basicdata/Airport.vue'
import Table from '../views/nav1/table.vue'
import Form from '../views/nav1/form.vue'
import User from '../views/nav1/user.vue'
import Page1 from '../views/nav2/page1.vue'
import Page2 from '../views/nav2/page2.vue'
import Page3 from '../views/nav2/page3.vue'

Vue.use(Router)

let routers = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '主页',
      iconCls: 'el-icon-s-home',
      index: '/main',
      leaf: true, // 只有一个节点
      children: [
        { path: '/main', component: Main, name: '主页' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '基础数据',
      iconCls: 'el-icon-s-promotion', // 图标样式class
      children: [
        { path: '/airport', component: Airport, name: '机场信息' },
        { path: '/table', component: Table, name: 'Table' },
        { path: '/form', component: Form, name: 'Form' },
        { path: '/user', component: User, name: '用户' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'el-icon-s-data',
      children: [
        { path: '/page2', component: Page2, name: '页面2' },
        { path: '/page3', component: Page3, name: '页面3' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-s-marketing ',
      leaf: true, // 只有一个节点
      children: [
        { path: '/page6', component: Page1, name: '导航三' }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
export default routers
