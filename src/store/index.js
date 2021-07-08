// import Vue from "vue";
// import Vuex from "vuex";
// import { getData } from "../services/getsettings";

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         data: {}
//     },
//     mutations: {
//         updateData(state, payload) {
//             state.data = payload;
//         }
//     },
//     actions: {
//         async reqData(context) {
//             const res = await getData();
//             context.commit('updateData', res.data.data);
//         }
//     }
// })