import RainbowBank from "./RainbowBank.json";
import LoanMarket from "./LoanMarket";
import RbBankOrchestrator from "./RbBankOrchestrator.json";
import RBT from "./RBT.json";
import RbtDeposit721 from "./RbtDeposit721.json";
import TokenExchangeMarket from "./TokenExchangeMarket.json"
import ERC20Orchestrator from "./ERC20Orchestrator.json"
const CONTRACTS = {
    RbtDeposit721: {address:"0xc4886C90f8Bb0EC4f486af525Ee9e4CD24A1dB52",abi:RbtDeposit721},
    RbBankOrchestrator:{address:"0x1483b291ae93aAD586E9a24F4A261A26bE1115EF",abi:RbBankOrchestrator},
    RBT:{address:"0xC18Ea0101bA60F30E26936501149286D133E28a6",abi:RBT},
    RainbowBank:{address:"0x40D45f3142137f008A77bcDE2EB35Dc7347aba5c",abi:RainbowBank},
    LoanMarket:{address:"0xE126dC5544BB9e0A22595d5dc62CF4F53fE09479",abi:LoanMarket},
    TokenExchangeMarket:{address:"0xbdDfAcCd7D5f902bF1520eCe29E62A8e33017FF1",abi:TokenExchangeMarket},
    ERC20Orchestrator:{address:"0x5CEe210EeBe90d5b68E866335DC12B4489B129c1",abi:ERC20Orchestrator},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    console.log(CONTRACTS[name].abi, address)
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}


export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};
