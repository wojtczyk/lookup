# Lookup

## Description

Lookup - the filecoin search engine and distributed dataset index.

Lookup consists of three parts: 
1. An FEVM smart contract that stores indexes for datasets on the blockchain.
2. A blockchain bot that collects all the index information from the smart contract and processes. 
3. A web dApp where users can enter queries and search for the desired datasets or files.

The smart contract is implemented in Solidity and we started off with the FEVM-hardhat-kit project to deploy and test the contract for adding index entries to the contract. These entries were then verified in GLIF explorer. The app is currently prototyped in python using Django. 

based on FEVM Hardhat Kit
https://github.com/filecoin-project/FEVM-Hardhat-Kit

## Install dependencies

```
cd lookup
yarn install
```


## Get a Private Key

You can get a private key from a wallet provider [such as Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).


## Add your Private Key as an Environment Variable

Add your private key as an environment variable by running this command: 
 
 ```
export PRIVATE_KEY='abcdef'
```

If you use a .env file, don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!


## Get the Deployer Address

Run this command:
```
yarn hardhat get-address
```

The f4address is the filecoin representation of your Ethereum address. This will be needed for the faucet in the next step.

The Ethereum address will be used otherwise.


## Fund the Deployer Address

Go to the [Wallaby faucet](https://wallaby.network/#faucet), and paste in the f4 address we copied in the previous step. This will send some wallaby testnet FIL to the account.


## Deploy the IndexCoin Contract

Type in the following command in the terminal: 
 
 ```
yarn hardhat deploy
```

This will compile the contract and deploy it to the Wallaby network automatically!

Keep note of the deployed contract address for the next step.


## Read your IndexCoin balance

Type in the following command in the terminal: 
 
 ```
yarn hardhat get-balance --contract 'THE DEPLOYED CONTRACT ADDRESS HERE' --account 'YOUR Ethereum ADDRESS HERE'
```

The console should read that your account has 10000 SimpleCoin!


## Create Index Item on the blockchain and push it to the IndexCoin contract

Type in the following command in the terminal: 
 
 ```
yarn hardhat create-index \\
--contract "DEPLOYED CONTRACT ADDRESS" \\
--title "DATASET TITLE" \\
--description "DATASET DESCRIPTION" \\
--keywords "INDEXING KEYWORDS" \\
--cid "CONTENT ID"

e.g.:
yarn hardhat create-index \\
--contract "0xaDA9E5C68bF3e58bDC313856E94fa3AdF90eC329" \\
--title "wikipedia" \\
--description "Wikipedia Corpus" \\
--keywords "wikipedia,encyclopedia" \\
--cid "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci"
```
