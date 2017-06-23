import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/home.vue'
import Generate from '@/views/Generate.vue'
import dataUpload from '@/views/nav1/dataUpload.vue'
import dataHandling from '@/views/nav1/dataHandling.vue'
import dataExport from '@/views/nav1/dataExport.vue'
import dataImport from '@/views/nav1/dataImport.vue'
import DataView from '@/views/dataView.vue'
import DetailView from '@/views/detailsView.vue'
import Dictionary from '@/views/Dictionary.vue'
import User from '@/views/user/userManage.vue'
import UserEdit from '@/views/user/userEdit.vue'
import UserAdd from '@/views/user/userAdd.vue'
import LoginLog from '@/views/loginLog.vue'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      hidden: true
    },
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/generate',
      name: 'COC数据生成',
      component: Home,
      iconClass: 'fa fa-file-text',
      redirect: '/generate/index',
      children: [
        {
          path: 'index',
          component: Generate,
          name: '数据生成',
          hidden: true
        },
        {
          path: 'dataUpload',
          name: '数据上传',
          component: dataUpload
        },
        {
          path: 'dataImport',
          name: '导入数据确认',
          component: dataImport,
          hidden: true
        },
        {
          path: 'dataHandling',
          name: '数据处理',
          component: dataHandling
        },
        {
          path: 'dataExport',
          name: '数据导出',
          component: dataExport
        }
      ]
    },
    {
      path: '/dataview',
      component: Home,
      leaf: true, //only one point
      iconClass: 'fa fa-pie-chart',
      redirect: '/dataview/index',
      children: [
        {
          path: 'index',
          name: '数据查看',
          component: DataView,
          hidden: true,
        }
      ]
    },
    {
      path: '/detailsview',
      component: Home,
      leaf: true, //only one point
      iconClass: 'fa fa-area-chart',
      redirect: '/detailsview/index',
      children: [
        {
          path: 'index',
          name: 'COC详情查看',
          component: DetailView,
          hidden: true,
        }
      ]
    },
    {
      path: '/dictionary',
      component: Home,
      leaf: true, //only one point
      iconClass: 'fa fa-book',
      redirect: '/dictionary/index',
      children: [
        {
          path: 'index',
          name: '字典维护',
          component: Dictionary,
          hidden: true,
        }
      ]
    },
    {
      path: '/usermanage',
      component: Home,
      leaf: true, //only one point
      iconClass: 'fa fa-user',
      redirect: '/usermanage/index',
      children: [
        { path: 'index', name: '用户管理', component: User },
        { path: 'UserEdit', name: '用户管理', component: UserEdit },
        { path: 'UserAdd', name: '用户管理', component: UserAdd }
      ]
    },
    {
      path: '/log',
      component: Home,
      leaf: true, //only one point
      iconClass: 'fa fa-sticky-note',
      redirect: '/log/index',
      children: [
        {
          path: 'index',
          name: '登录日志',
          component: LoginLog,
          hidden: true,
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
});