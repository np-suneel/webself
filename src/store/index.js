import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    register: {
      firstName: "",
      password: "",
      mobileNumber: "",
      email: "",
      tenantId: 1,
    },
    fashid: null
  },
  mutations: {
    SET_REGISTER_INFO: (state, payload) => {
      state.register.firstName = payload.firstName;
      state.register.password = payload.password;
      state.register.mobileNumber = payload.mobileNumber;
      state.register.email = payload.email;
      state.register.tenantId = payload.tenantId;
    },
    fashId(state, id){
      console.log('called mutation', id)
      state.fashid = id
    }
  },
  actions: {
    UPDATE_REGISTER_INFO: ({ commit }, payload) => {
      commit("SET_REGISTER_INFO", payload);
    },
  },
  modules: {},
});
