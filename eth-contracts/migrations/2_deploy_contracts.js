const IRealEstateToken = artifacts.require('IRealEstateToken');
const Verifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {

    deployer.deploy(IRealEstateToken)
        .then(() => deployer.deploy(Verifier))
        .then(() => deployer.deploy(SolnSquareVerifier, Verifier.address));
};
