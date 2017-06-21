import stocks from '../data/stocks.js';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks){
    state.stocks = stocks;
  },
  'RANDOM_STOCKS' (state){
    state.stocks.forEach(s=>{
      s.price += Math.random() * (s.price*.35) - (s.price * .25 / 2)
    })
  }
};

const actions = {
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS');
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};
