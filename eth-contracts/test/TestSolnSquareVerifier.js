var Test = require('../config/testConfig.js');

contract('TestSolnSquareVerifier', accounts => {

    before('setup contract', async () => {
        config = await Test.Config(accounts);
        proof = config.proof["proof"];
        inputs = config.proof["inputs"];
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('adds a new solution for the contract', async () => {
        let result = await config.solnSquareVerifier.addSolution(proof.a, proof.b, proof.c, inputs, config.account_two, 20, {from: config.account_one});
        let event = result.logs[0].event;
        assert(event == "SolutionAdded", "Solution was not added");
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('mints a new token', async () => {
        let result = await config.solnSquareVerifier.verifiedMint(config.account_two, 20, {from: config.account_one});
        let event = result.logs[0].event;
        assert(event == "Transfer", "Token was not minted");
    });
});
