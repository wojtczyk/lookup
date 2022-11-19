task("get-index-balance", "Calls the index coin Contract to read the amount of IndexCoins owned by the account.")
  .addParam("contract", "The address of the IndexCoin contract")
  .addParam("account", "The address of the account you want the balance for")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract
    const account = taskArgs.account
    const networkId = network.name
    console.log("Reading IndexCoin owned by", account, " on network ", networkId)
    const IndexCoin = await ethers.getContractFactory("IndexCoin")

    //Get signer information
    const accounts = await ethers.getSigners()
    const signer = accounts[0]


    const indexCoinContract = new ethers.Contract(contractAddr, IndexCoin.interface, signer)
    let result = BigInt(await indexCoinContract.getBalance(account)).toString()
    console.log("Data is: ", result)
  })

module.exports = {}