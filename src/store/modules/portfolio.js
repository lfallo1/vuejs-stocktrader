const state = {
  funds: 10000,
  stocks: []
};

//what allows us to change state
const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}){
    const record = state.stocks.find(el => el.id == stockId);
    if(record){
      record.quantity += quantity;
    } else{
      state.stocks.push({
        id: stockId,
        quantity: Number(quantity)
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}){
    quantity = Number(quantity);
    const record = state.stocks.find(el => el.id == stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity;
    } else{
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  sellStock({ commit }, order){
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio (state, getters){
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state){
    return state.funds
  }
};

export default{
  state,
  mutations,
  actions,
  getters
}
