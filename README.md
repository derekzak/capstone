# Udacity Blockchain Capstone
The capstone will build upon the knowledge gained in the Udacity Blockchain course in order to build a decentralized housing product.  This is a ERC721 token used to verify ownership of a property.  zk-SNARKs is used to create a verification system which can prove that you are the owner of a title to the property without revealing specifics of the property.  The tokens can then be placed in a blockchain marketplace (https://opensea.io) for sale.

# Installation
- Clone the project
- npm install
- start ganache gui (https://www.trufflesuite.com/ganache)
- cd ./eth-contracts
- truffle compile

# Testing
- cd ./eth-contracts
- truffle test (All 11 tests should pass)

# Rinkeby Deploy
- cd ./eth-contracts
- truffle migrate --network rinkeby --reset

# Rinkeby Mint Tokens
- export OWNER_ADDRESS="<my_address>"
- export CONTRACT_ADDRESS="<deployed_contract_address>"
- export MNEUMONIC="<wallet_seed>"
- export INFURA_KEY="<infura_key>"
- node scripts/mint.js

# Rinkeby Contract Details
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x8f269b1aa1630e55d6b7ff3b59dcab2e0bef6f081b45db95793db1ede60d320d
   > Blocks: 0            Seconds: 0
   > contract address:    0x1cDEF4F90f5FED3A9D07911Ea32507DF4d48AF67
   > block number:        8166259
   > block timestamp:     1614723597
   > account:             0x320eAff365D72c2DD5c052E927d0A619D63099f0
   > balance:             7.716501923
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x5621ace82666810c55731b055a5773c78539a497e2e72ef05c30a5a678bc595f
   > Blocks: 1            Seconds: 12
   > contract address:    0x42bA5611DB8BE71Ae85b47B2a04033BEAa4B32C7
   > block number:        8166261
   > block timestamp:     1614723627
   > account:             0x320eAff365D72c2DD5c052E927d0A619D63099f0
   > balance:             7.688445373
   > gas used:            2763292 (0x2a2a1c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02763292 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x578a5d5b446729b0068c9335de2e1637ed3a95b075d6755b35ac810f361c5276
   > Blocks: 0            Seconds: 8
   > contract address:    0xCcaC16961C85ED23bc601c790BE7800BfFed1C31
   > block number:        8166262
   > block timestamp:     1614723642
   > account:             0x320eAff365D72c2DD5c052E927d0A619D63099f0
   > balance:             7.678769063
   > gas used:            967631 (0xec3cf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967631 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x176cb27900e007a0ae50b7889f15fccbbe904085b900ab64d68bf775d52a9191
   > Blocks: 1            Seconds: 12
   > contract address:    0x8bD86F7F44F7edDFE9154cC32bD616302140bEA9
   > block number:        8166263
   > block timestamp:     1614723657
   > account:             0x320eAff365D72c2DD5c052E927d0A619D63099f0
   > balance:             7.635769993
   > gas used:            4299907 (0x419c83)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04299907 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0803083 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.08256067 ETH

# Rinkeby URLs
- ERC721Mintable: https://rinkeby.etherscan.io/address/0x42bA5611DB8BE71Ae85b47B2a04033BEAa4B32C7
- Verifier: https://rinkeby.etherscan.io/address/0xCcaC16961C85ED23bc601c790BE7800BfFed1C31
- SolnSquareVerifier: https://rinkeby.etherscan.io/address/0x8bD86F7F44F7edDFE9154cC32bD616302140bEA9
- 10 Minted Tokens: https://rinkeby.etherscan.io/token/0x8bD86F7F44F7edDFE9154cC32bD616302140bEA9
- Opensea Storefront: https://testnets.opensea.io/collection/capstone-token-v2
- Opensea Activity: https://testnets.opensea.io/activity/capstone-token-v2


# Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
