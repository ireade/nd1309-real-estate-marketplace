const IRealEstateToken = artifacts.require('IRealEstateToken');

let accounts;
let owner;

contract('IRealEstateToken', acc => {
    accounts = acc;
    owner = accounts[0];
});

describe('have ownership properties', function () {

    let instance;

    before(async function () {
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
        let failed = false;

        try {
            await instance.mint(accounts[2], 1, {from: accounts[2]});
            console.log("it worked :(")
        } catch (err) {
            failed = true;
        }

        assert.equal(failed, true, "Non-owner should not be able to mint");
    });

});

describe('have pausable functionality', function () {

    let instance;

    before(async function () {
        instance = await IRealEstateToken.new({from: owner});
    });

    it('should return paused state', async function () {
        const result = await instance.getPaused();

        assert.equal(result, false, "Initial paused state is not false");
    });

    it('should be able to change paused state', async function () {
        const newState = true;
        await instance.setPaused(newState, {from: owner});

        assert.equal(await instance.getPaused(), newState, "Paused state was not changed");
    });

});


describe('match erc721 spec', function () {

    let instance;
    const tokenIds = [1, 2, 3];

    before(async function () {
        instance = await IRealEstateToken.new({from: owner});

        instance.mint(owner, tokenIds[0], {from: owner});
        instance.mint(accounts[1], tokenIds[1], {from: owner});
        instance.mint(accounts[2], tokenIds[2], {from: owner});
    });

    it('should get name, symbol, and baseTokenURI of token', async function () {
        const name = "IRealEstateToken";
        const symbol = "IRET";
        const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

        assert.equal(await instance.getName(), name, "Token has incorrect name");
        assert.equal(await instance.getSymbol(), symbol, "Token has incorrect symbol");
        assert.equal(await instance.getBaseTokenURI(), baseTokenURI, "Token has incorrect baseTokenURI");
    });

    it('should return total supply', async function () {
        const result = await instance.totalSupply();

        assert.equal(result, tokenIds.length, "Token supply is incorrect");
    });

    it('should get token balance of given address', async function () {
        const result = await instance.balanceOf(owner);

        assert.equal(result, 1, "Balance of address is incorrect");
    });

    it('should get owner of token', async function () {
        const result = await instance.ownerOf(1);

        assert.equal(result, owner, "Owner of token is incorrect");
    });

    it('should approve token to be sent to another address', async function () {
        const tokenOwner = accounts[1];
        const tokenId = tokenIds[1];
        const to = accounts[2];

        await instance.approve(to, tokenId, { from: owner });

        const result = await instance.getApproved(tokenId);

        assert.equal(result, to, "To account is not approved");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async function () {
        const tokenId = tokenIds[0];
        const baseTokenURI = await instance.getBaseTokenURI();
        const expectedTokenURI = baseTokenURI + tokenId;

        const result = await instance.tokenURI(tokenId);

        assert.equal(result, expectedTokenURI, "Token URI is incorrect");
    });

    it('should transfer token from one owner to another', async function () {
        const tokenId = tokenIds[0];
        const to = accounts[1];

        await instance.transferFrom(owner, to, tokenId);

        const result = await instance.ownerOf(tokenId);

        assert.equal(result, to, "Owner of token is incorrect after transfer");
    });
});
