const util = require("util");
const request = util.promisify(require("request"));

task("create-index", "Creates an Index Element and stores it on the blockchain.")
.addParam("contract", "The IndexCoin address")
.addParam("title", "One-liner describing the dataset.")
.addParam("description", "Detailed description of the dataset")
.addParam("keywords", "Comma-seperated keywords")
.addParam("cid", "Content id identifying the stored data")
.setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract
    const title = taskArgs.title
    const description = taskArgs.description
    const keywords = taskArgs.keywords
    const cid = taskArgs.cid

    const cidnetworkId = network.name
    const IndexCoin = await ethers.getContractFactory("IndexCoin")
    //Get signer information
    const accounts = await ethers.getSigners()
    const signer = accounts[0]
    const priorityFee = await callRpc("eth_maxPriorityFeePerGas")

    async function callRpc(method, params) {
        var options = {
          method: "POST",
          url: "https://wallaby.node.glif.io/rpc/v0",
          // url: "http://localhost:1234/rpc/v0",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            method: method,
            params: params,
            id: 1,
          }),
        };
        const res = await request(options);
        return JSON.parse(res.body).result;
      }

    const indexCoinContract = new ethers.Contract(contractAddr, IndexCoin.interface, signer)
    console.log(
      "create(title:", title, 
      ", description:", description,
      ", keywords:", keywords,
      ", cid:", cid,
      ")")
    await indexCoinContract.create(title, description, keywords, cid, {
        gasLimit: 1000000000,
        maxPriorityFeePerGas: priorityFee
    })
})

module.exports = {}