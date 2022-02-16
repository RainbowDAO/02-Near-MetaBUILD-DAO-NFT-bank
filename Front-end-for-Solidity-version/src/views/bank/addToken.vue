<template>
<div class="addToken">
  <div class="add-token-box">
    <div class="add-content">
      <div class="item">
        <div class="name">
          TOKEN NAME
        </div>
        <input type="text" v-model = "tokenName" placeholder="NAME">
      </div>
      <div class="item">
        <div class="name">
          SYMBOL
        </div>
        <input type="text" v-model = "tokenSymbol" placeholder="SYMBOL">
      </div>
      <div class="item">
        <div class="name">
          AMOUNT
        </div>
        <input type="text" v-model = "tokenAmount" placeholder="ENTER">
      </div>
      <div class="item">
        <div class="name">
          DECIMALS
        </div>
        <input type="text" v-model = "tokenDecimals" placeholder="18">
      </div>
      <div class="item">
        <div class="name">
          TOKEN HOLDERS
        </div>
        <input type="text" v-model = "userAddress" placeholder="Account address">
      </div>
    </div>
    <div class="complete" @click = "Complete">
      Complete
    </div>
  </div>
</div>
</template>

<script>
// import getContract from "../../../utils/abiUtil"

export default {
  name: "initBank",

  data() {
    return {
      tokenName: undefined,
      tokenSymbol: undefined,
      tokenDecimals:undefined,
      tokenAmount: undefined,
      userAddress: undefined,
    }
  },
  methods: {

     async Complete() {
     
      //  this.erc20Factory = getContract.getContractAddress("erc20Factory")
       
      await this.$store.dispatch("erc20Factory/creatToken", this.tokenName,this.tokenSymbol,this.tokenDecimals,this.tokenAmount,this.userAddress).then(() => {
        this.$store.dispatch("RbBankOrchestrator/bank").then(res => {
          console.log(res)
          this.bankAddr = res
      })
    })
    }
  }
}
</script>

<style lang="scss" scoped>
.addToken{
  min-height: calc(100vh - 160px);
  .add-token-box{
    background: #fff;
    width: 900px;
    margin: -60px auto 30px;
    padding: 30px;
    border-radius: 20px;
  }

  .complete{
    text-align: center;
    line-height: 40px;
    width: 160px;
    height: 40px;
    background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border: 1px solid #eaeaea;
    border-radius: 10px;
    color: white;
    margin: 30px auto;
    cursor: pointer;
  }
  .add-content{
    width: 700px;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;

    .item{
      width: 50%;
      &:last-child{
        width: 100%;
      }
      .name{
        font-size: 14px;
        line-height: 50px;
        font-weight: 700;
        text-align: left;
        color: #333333;
      }
      input{
        width: 95%;
        height: 40px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        padding: 0 10px;
        border-radius: 10px;
      }
    }
  }
}
</style>
