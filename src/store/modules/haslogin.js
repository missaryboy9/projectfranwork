import { asynvmap_ } from "@/router/map.js";
const state = {
  routerdata: [],
  loginflag: false,
  setrouter: []
};

const mutations = {
  SAVEROUTER_DATA: (state, routerdata) => {
    state.routerdata = routerdata;
  },
  DYNAMIC_ROUTERDATA: (state, ansydata) => {
    state.loginflag = ansydata;
  },
  SET_ROUTERS: (state, data) => {
    state.setrouter = data;
  }
};
const actions = {
  routerdata({ commit }, routedata) {
    commit("SAVEROUTER_DATA", routedata);
  },
  ansyrouterdata({ commit }, ansyroutdata) {
    commit("DYNAMIC_ROUTERDATA", ansyroutdata);
  },
  GenerateRoutes({ commit }, data) {
    return new Promise(resolve => {
      let setdata = [];
      commit("SET_ROUTERS", data);
      setdata = generateRouter(data);
      resolve(setdata);
    });
  }
};

function generateRouter(data) {
  data.forEach(element => {
    if (element.children instanceof Object && element.children.length > 0) {
      element.component = () => import("@/layout");
      element.children.forEach(ele => {
        if (ele.src === "Temporary") {
          ele.component = asynvmap_["Temporary"];
        } else {
          ele.component = asynvmap_[ele.src];
        }
      });
    } else {
    }
  });
  return data;
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
