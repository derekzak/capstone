const HDWalletProvider = require("@truffle/hdwallet-provider");
const solutionProofs = [
    require("./proof.json"),
    require("./proof2.json"),
    require("./proof3.json"),
    require("./proof4.json"),
    require("./proof5.json"),
    require("./proof6.json"),
    require("./proof7.json"),
    require("./proof8.json"),
    require("./proof9.json"),
    require("./proof10.json"),
];
const Web3 = require('web3');
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;

if (!OWNER_ADDRESS || !CONTRACT_ADDRESS || !MNEMONIC || !INFURA_KEY) {
    console.error("Please set env vars: OWNER_ADDRESS, CONTRACT_ADDRESS, MNEMONIC, INFURA_KEY");
    return;
}

const contract = require('../eth-contracts/build/contracts/SolnSquareVerifier.json');
const ABI = contract.abi;

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new Web3(
        provider
    )

    if (CONTRACT_ADDRESS) {
        const capstoneToken = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "1000000" })
        for (let i = 0 ; i < 10 ; i++) {
            try {
                let proofs = Object.values(solutionProofs[i].proof);
                let inputs = solutionProofs[i].inputs;

                console.log("owner address: " + OWNER_ADDRESS + "\n");
                console.log("count: " + i+1 + "\n");
                console.log("proofs: " + proofs + "\n");
                console.log("inputs: " + inputs + "\n");

                let result = await capstoneToken.methods.addSolution(...proofs, inputs, OWNER_ADDRESS, i).send({ from: OWNER_ADDRESS });
                console.log("Solution added - Transaction: " + result.transactionHash);

                result = await capstoneToken.methods.mint(OWNER_ADDRESS, i).send({ from: OWNER_ADDRESS });
                console.log("Minted token - Transaction: " + result.transactionHash);
                console.log("\n********************************************************************\n");
            } catch (e) {
                console.log("Error: ", e);
            }
        }
    }
}

main()
