import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueIziToast from "vue-izitoast";
import { BootstrapVue } from "bootstrap-vue";
// import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import setAuthHeaders from "./utils/setAuthHeaders";
import i18n from './i18n'

Vue.use(BootstrapVue);
Vue.use(VueIziToast);
Vue.config.productionTip = false;

if (localStorage.jwtToken) {
  setAuthHeaders(localStorage.jwtToken);
} else {
  setAuthHeaders(localStorage.jwtToken);
}

let baseURL = "https://bf-qa.rdep.io:9090";
if (
  process.env.NODE_ENV !== "development" &&
  process.env.VUE_APP_BASE_URL !== ""
) {
  baseURL = process.env.VUE_APP_BASE_URL;
}
Vue.prototype.$http = require("axios");
Vue.prototype.$http.defaults.baseURL = baseURL;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
