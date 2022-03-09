import {getData} from "../../api/home";
export default {
  state: {
    name: 'page1-name'
  },
  mutations: {
    SET_DATA(state, {key, value} = {}) {
      state[key] = value;
    }
  },
  actions: {
    // 热力图
    GET_HEAT_MAP({commit}) {
      return getData().then((data) => {
        commit("SET_DATA", {
          key: "heatData",
          value: data,
        });
      }).catch((err) => {
            console.log(err);
          });
    }
  }
}
