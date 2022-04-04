import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import features from "../views/Trending.vue";
import catalogues from "../views/Catalogues.vue";
import cl from "../views/CatalogueList.vue";
import cart from "../views/Cart.vue";
import SelectStore from "../views/SelectStore.vue";
import scanner from "../views/Scanner.vue";
import test from "../views/test.vue";
import payment from "../views/Payment.vue";
import MyOrders from "../views/MyOrders.vue";
import PasswordReset from "../views/PasswordReset.vue";
import a from "../views/a.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/a",
    name: "a",
    component: a,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/catalogues",
    name: "",
    component: catalogues,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/checkout",
    name: "",
    component: payment,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/test",
    name: "",
    component: test,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/display",
    name: "",
    component: cl,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      hideNavbar: true,
      subnav: true,
    },
  },
  {
    path: "/scan",
    name: "Login",
    component: scanner,
    meta: {
      hideNavbar: true,
      subnav: true,
    },
  },
  {
    path: "/select-store",
    name: "Login",
    component: SelectStore,
    meta: {
      hideNavbar: true,
      subnav: true,
    },
  },
  {
    path: "/",
    name: "Register",
    component: Register,
    meta: {
      hideNavbar: true,
      subnav: true,
    },
  },
  {
    path: "/features",
    name: "features",
    component: features,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
    meta: {
      // hideNavbar: true,
      subnav: true,
    },
  },
  {
    path: "/myorders",
    name: "myorders",
    component: MyOrders,
    meta: {
      subnav: true,
    },
  },
  {
    path: "/resetpass",
    name: "resetpass",
    component: PasswordReset,
    meta: {
      subnav: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
