import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import UserList from '../views/user/List.vue'
import UserProfile from '../views/user/Profile.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router);

export default new Router({
  //去掉网址的#号
  mode: 'history',
  routes: [
    {
      path: '/main/:username',
      component: Main,
      props: true,
      // 嵌套路由
      children: [
        // 传参 '/user/profile/:id/:username'
        {path : '/user/profile/:id',
          name : 'UserProfile',
          component: UserProfile,
          // props: true
        }
        ,
        {path: '/user/list', component: UserList}
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      //重定向
      path: '/goHome',
      redirect: '/main'
    }
    ,{
    //404页面 ，放最后
    path: '*',
      component: NotFound
    }
  ]
});
