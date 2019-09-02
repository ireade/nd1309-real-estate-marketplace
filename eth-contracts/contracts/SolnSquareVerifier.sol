pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./Verifier.sol";

contract SolnSquareVerifier is IRealEstateToken {

    Verifier private verifierContract;

    // [x] TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
    }

    // [x] TODO define an array of the above struct
    Solution[] private _solutions;

    // [ ] TODO define a mapping to store unique solutions submitted
    mapping(uint256 => Solution) private submittedSolutions;

    event SolutionAdded(uint256 index, address account);


    constructor(address verifierContractAddress)
    public
    {
        verifierContract = Verifier(verifierContractAddress);
    }


    // [ ] TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 index, address account)
    public pure
    {


    }



    // [ ] TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mintIRealEstateToken()
    public pure
    {

    }

}


























