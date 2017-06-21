const state = {
  user: {
    name: "Lance Fallon",
    dob: new Date(1986,9,12),
    email: "fallon.lance@gmail.com"
  }
};

const mutations = {
  'USER_UPDATE' (state, user){
    state.user = user;
  }
};

const actions = {
  updateUser({ commit }, user){
    commit('USER_UPDATE', user);
  }
};

const getters = {
  user: state => {
    return state.user;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
