const IRealEstateToken = artifacts.require('IRealEstateToken');

let accounts;
let owner;

contract('TestERC721Mintable', acc => {
    accounts = acc;
    owner = accounts[0];
});

describe('have ownership properties', function () {

    let instance;

    beforeEach(async function () {
        instance = await IRealEstateToken.new({from: owner});
    });

    it('should return contract owner', async function () {
        const returnedOwner = await instance.getOwner();

        assert.equal(returnedOwner, owner, "Contract owner is incorrect");
    });

    it('should be able to transfer ownership to new owner', async function () {
        const newOwner = accounts[1];
        await instance.transferOwnership(newOwner, {from: owner});

        assert.equal(await instance.getOwner(), newOwner, "Ownership was not transferred to new owner");
    });


    it('should fail when minting when address is not contract owner', async function () {

        // @todo

    });

});

describe('have pausable functionality', function () {

    let instance;

    beforeEach(async function () {
        instance = await IRealEstateToken.new({from: owner});
    });

    it('should return paused state', async function () {
        const result = await instance.

    });

    it('owner should be able to change paused state', async function () {

    });

});


describe('match erc721 spec', function () {

    let instance;

    beforeEach(async function () {
        instance = await IRealEstateToken.new({from: owner});

        // @todo: mint tokens
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
