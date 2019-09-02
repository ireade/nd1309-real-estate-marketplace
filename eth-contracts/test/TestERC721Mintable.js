const IRealEstateToken = artifacts.require('IRealEstateToken');

let account_one;
let account_two;


contract('TestERC721Mintable', accounts => {
    account_one = accounts[0];
    account_two = accounts[1];
});

describe('have ownership properties', function () {
    beforeEach(async function () {
        this.contract = await IRealEstateToken.new({from: account_one});
    });

    it('should return contract owner', async function () {

    });

    it('should be able to transfer ownership to new owner', async function () {

    });

    it('should fail when minting when address is not contract owner', async function () {

    });

});

describe('have pausable functionality', function () {
    beforeEach(async function () {
        this.contract = await IRealEstateToken.new({from: account_one});
    });

    it('should return paused state', async function () {

    });

    it('owner should be able to change paused state', async function () {

    });

});


describe('match erc721 spec', function () {
    beforeEach(async function () {
        this.contract = await IRealEstateToken.new({from: account_one});

        // TODO: mint multiple tokens
    });

    it('should get name, symbol, and baseTokenURI of token', async function () {

    });

    it('should return total supply', async function () {

    });

    it('should get token balance of given address', async function () {

    });

    it('should get owner of token', async function () {

    });

    it('should approve token to be sent to another address', async function () {

        // function approve

        // getApproved should return address approved

    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async function () {

        /// setTokenURI?

    });

    it('should transfer token from one owner to another', async function () {

        // _transferFrom

    });
});
