import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login";
import register from "@/components/register";
import task from "@/components/Task";
import auth from './auth';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "task",
      component: task,
      beforeEnter : auth.auth,
    },
    {
      path: "/register",
      name: "register",
      component: register,
      meta: {}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {}
    }
  ]
});
