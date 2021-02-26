var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            let erc721Mintable = await ERC721Mintable.new({from: account_one});

            // TODO: mint multiple tokens
            erc721Mintable.mint(account_one, 1, {from: account_one});
            erc721Mintable.mint(account_two, 2, {from: account_one});
        })

        it('should return total supply', async function () {
            assert(erc721Mintable.totalSupply() == 2);
        })

        it('should get token balance', async function () {

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {

        })

        it('should transfer token from one owner to another', async function () {

        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            let erc721Mintable = await ERC721Mintable.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            let result = erc721Mintable.mint(account_two, 1, {from: account_two});
            assert(result == false, "Non contract owner should not be able to mint a new token");
        })

        it('should return contract owner', async function () {

        })

    });
})