import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//我增加的
import Heyhey from "../views/Heyhey.vue";

Vue.use(VueRouter);

const routes = [
  {
    //为了看效果，我想看看/目录是怎么样的
    //path: "/",
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  //我增加的
  {
    path: "/heyheyp",
    name: "Heyheyn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Heyhey
  }
];

const router = new VueRouter({
  //如果我用History的话index2.html上的<a href="/#/Heyhey">Heyhey</a> 就不需要#号
  //默认是hash 方式, hash 我自己暂时觉得挺好,虽然要加一个#
  //但这种方式可以很好的 区别 哪些是api 请求，哪些是跳转页面
  //虽然我是前后端分离，端口不一样，
  //https://www.jianshu.com/p/8ebcd0c47d43
  //mode: 'history',
  routes
});

export default router;
