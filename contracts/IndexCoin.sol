// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract IndexCoin {
        // Store dataset index inforamtion on the chain
        struct Index {
                string title;  // One-liner describing the dataset
                string description;  // Detailed description of the dataset
                string keywords;  // Comma-seperated keywords
                string cid;  // Content id identifying the stored data
        }

        // An array of Index structs on the blockchain, that an external processor will scrape
        // and serve in a UI
        Index[] public index;

        function create (
                string calldata _title,
                string calldata _description,
                string calldata _keywords,
                string calldata _cid
        ) public {
                // Put item onto the index
                index.push(Index(_title, _description, _keywords, _cid));
        }

        mapping (address => uint) balances;

        constructor() {
                balances[tx.origin] = 9999;
        }

        function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
                if (balances[msg.sender] < amount) return false;
                balances[msg.sender] -= amount;
                balances[receiver] += amount;
                return true;
        }

        function getBalanceInEth(address addr) public view returns(uint){
                return getBalance(addr) * 2;
        }

        function getBalance(address addr) public view returns(uint) {
                return balances[addr];
        }
}