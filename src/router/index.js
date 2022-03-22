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
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalogues",
    name: "",
    component: catalogues,
  },
  {
    path: "/display",
    name: "",
    component: cl,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/select-store",
    name: "Login",
    component: SelectStore,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/",
    name: "Register",
    component: Register,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/features",
    name: "features",
    component: features,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
