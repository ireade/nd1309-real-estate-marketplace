const Verifier = artifacts.require('Verifier');

let accounts;
let owner;

let instance;

contract('Verifier', acc => {
    accounts = acc;
    owner = accounts[0];
});


before(async function () {
    instance = await Verifier.new({from: owner});
});

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
it('should pass verification with correct proof', async function () {

});

// Test verification with incorrect proof
it('should fail verification with incorrect proof', async function () {

});
