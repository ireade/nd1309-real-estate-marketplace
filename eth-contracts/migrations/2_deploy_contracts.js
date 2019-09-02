const IRealEstateToken = artifacts.require('IRealEstateToken');
// const SquareVerifier = artifacts.require("./SquareVerifier.sol");
// const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {
    deployer.deploy(IRealEstateToken);
    // deployer.deploy(SquareVerifier);
    // deployer.deploy(SolnSquareVerifier);
};
