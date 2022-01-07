import { createStore } from "vuex";

import { state } from "./state/state";
import mutations from "./mutations/mutations";

export default createStore({
  state,
  mutations,
  actions: {},
  modules: {},
});
