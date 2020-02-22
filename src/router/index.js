import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/login/Index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
