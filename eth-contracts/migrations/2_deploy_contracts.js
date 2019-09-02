const Verifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const IRealEstateToken = artifacts.require('IRealEstateToken');

module.exports = async function (deployer) {

    await deployer.deploy(Verifier);
    await deployer.deploy(IRealEstateToken);
    deployer.deploy(SolnSquareVerifier, Verifier.address);
};
