import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import page1 from '@/components/page1/page1'
import page2 from '@/components/page2/page2'
import page3 from '@/components/page3/page3'
import page4 from '@/components/page4/page4'
import xiaoBdetails from '@/components/xiaoBdetails/xiaoBdetails'
import supplierDetails from '@/components/supplierDetails/supplierDetails'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: 'page1',
      children:[
        {path: 'page1',name: 'page1',component: page1},
        {path: 'page2',name: 'page2',component: page2},
        {path: 'page3',name: 'page3',component: page3},
        {path: 'page4',name: 'page4',component: page4}
      ]
    },
    {
      path: '/xiaoBdetails',
      name: 'xiaoBdetails',
      component: xiaoBdetails
    },
    {
      path: '/supplierDetails',
      name: 'supplierDetails',
      component: supplierDetails
    }
  ],
  linkActiveClass: 'active',
})
