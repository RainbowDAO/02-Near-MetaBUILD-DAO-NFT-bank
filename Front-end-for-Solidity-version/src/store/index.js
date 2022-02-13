import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from "./modules/app";

// import ERC20Orchestrator from "./modules/abisMethods/ERC20Orchestrator";
// import RbBankOrchestrator from "./modules/abisMethods/RbBankOrchestrator";
// import RBT from "./modules/abisMethods/RBT"
// import RbtDeposit721 from "./modules/abisMethods/RbtDeposit721";
// import TokenExchangeMarket from "./modules/abisMethods/TokenExchangeMarket";
// import LoanMarket from "./modules/abisMethods/LoanMarket";
// import RainbowBank from "./modules/abisMethods/RainbowBank";



Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app,
    // ERC20Orchestrator,
    // RbtDeposit721,
    // RBT,
    // RbBankOrchestrator,
    // TokenExchangeMarket,
    // LoanMarket,
    // RainbowBank,
  }
})
