# Udacity Blockchain Capstone

The capstone will build upon the knowledge gained in the Udacity Blockchain course in order to build a decentralized housing product.  This is a ERC721 token used to verify ownership of a property.  zk-SNARKs is used to create a verification system which can prove that you are the owner of a title to the property without revealing specifics of the property.  The tokens can then be placed in a blockchain marketplace for sale.

# Installation
- Clone the project
- npm install
- start ganache gui
- cd ./eth-contracts
- truffle compile

# Testing
- cd ./eth-contracts
- truffle test (All 11 tests should pass)

# Rinkeby Details
- truffle migrate --network rinkeby --reset

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
