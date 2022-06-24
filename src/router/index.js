import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register";
import Login from "../views/Login";
import Posts from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guesst: true },
    // component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { guesst: true },
    // component: () => import("../components/Login.vue"),
  },
  {
    path: "/posts",
    name: Posts,
    component: Posts,
    meta: { requiresAuth: true },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductSingle",
    component: () => import("../views/ProductSingle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
