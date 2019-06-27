import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import Vuex from 'vuex'
import store from './store'

//在跳转前执行
router.beforeEach((to, form, next) => {
  //获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');

  //注销
  if (to.path == '/logout') {
    //清空
    sessionStorage.clear();

    //跳转到登录
    next({path: '/login'});
  }

  //如果请求登录页
  else if (to.path == '/login') {
    if (isLogin != null) {
      //跳到首页
      next({path: '/main'});
    }
  }

  //如果是非登陆状态
  else if (isLogin == null) {
    //跳转到登录页
    next({path: '/login'})
  }

  //下一个路由
  next();
});

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
