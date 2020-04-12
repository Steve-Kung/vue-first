import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '../components/Content.vue'
import Main from '../components/Main.vue'

// 安装路由
Vue.use(VueRouter);

// 导出路由配置
export default new VueRouter({
  routes: [
    {
      // 路由路径 相当于@RequestMapping
      path: '/content',
      name: 'content',
      // 跳转的组件
      component: Content
    },{
      // 路由路径
      path: '/main',
      name: 'main',
      // 跳转的组件
      component: Main
    }
  ]
});
