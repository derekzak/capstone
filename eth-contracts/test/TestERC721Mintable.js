var Test = require('../config/testConfig.js');

contract('TestERC721Mintable', accounts => {

    before('setup contract', async () => {
        config = await Test.Config(accounts);
    });

    describe('match erc721 spec', function () {
        it('should mint 10 tokens', async function () {
            let result = await config.capstoneToken.mint(config.account_one, 1, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_two, 2, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_one, 3, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_two, 4, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_one, 5, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_two, 6, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_one, 7, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_two, 8, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_one, 9, {from: config.account_one});
            result = await config.capstoneToken.mint(config.account_two, 10, {from: config.account_one});
        })

        it('should return total supply', async function () {
            let totalSupply = await config.capstoneToken.totalSupply.call();
            assert(totalSupply == 10, "Total supply should equal 10");
        })

        it('should get token balance', async function () {
            let tokenBalance = await config.capstoneToken.balanceOf.call(config.account_one);
            assert(tokenBalance == 5, "Token balance should equal 5")
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            let result = await config.capstoneToken.tokenURI.call(1, {from: config.account_one});
            assert(result == tokenURI, "Token URI not generated correctly")
        })

        it('should transfer token from one owner to another', async function () {
            let result = await config.capstoneToken.approve(config.account_two, 1, {from: config.account_one});
            result = await config.capstoneToken.transferFrom(config.account_one, config.account_two, 1, {from: config.account_one});
            result = await config.capstoneToken.ownerOf.call(1);
            assert(result == config.account_two, "Owner of token 1 should be account two")
        })
    });

    describe('have ownership properties', function () {
        it('should fail when minting when address is not contract owner', async function () {
            let result = false;
            try {
                await config.capstoneToken.mint(config.account_two, 11, {from: config.account_two});
            } catch (e) {
                result = true
            }
            assert(result == true, "Non contract owner should not be able to mint a new token");
        })

        it('should return contract owner', async function () {
            let result = await config.capstoneToken.owner.call();
            assert(result == config.account_one, "account_one should be the owner");
        })

    });
})