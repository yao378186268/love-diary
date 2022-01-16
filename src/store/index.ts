import { createStore } from 'vuex';

import { state } from './state/state';
import mutations from './mutations/mutations';
import { getters } from './getters';

export default createStore({
  state,
  mutations,
  getters,
  actions: {},
  modules: {}
});
