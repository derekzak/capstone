
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

var Config = async function(accounts) {

    const _account_one = accounts[0];
    const _account_two = accounts[1];

    let erc721Mintable = await ERC721Mintable.new();
    let verifier = await Verifier.new();
    let solnSquareVerifier = await SolnSquareVerifier.new(verifier.address);

    return {
        account_one: _account_one,
        account_two: _account_two,
        capstoneToken: erc721Mintable,
        verifier: verifier,
        solnSquareVerifier: solnSquareVerifier
    }
}

module.exports = {
    Config: Config
};
