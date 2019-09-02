pragma solidity >=0.4.21 <0.6.0;

import 'openzeppelin-solidity/contracts/drafts/Counters.sol';
import "./ERC721Mintable.sol";

contract SolnSquareVerifier is IRealEstateToken {

    using Counters for Counters.Counter;

    Verifier private verifierContract;

    enum SolutionState { Verified, Minted }

    struct Solution {
        uint256 index;
        address account;
        SolutionState state;
    }

    Counters.Counter private solutionsCount;

    mapping(bytes32 => Solution) private solutions;

    event SolutionAdded(uint256 index, address account);


    constructor(address verifierContractAddress)
    public
    {
        verifierContract = Verifier(verifierContractAddress);
    }


    function addSolution(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    {
        bytes32 hash = getSolutionHash(input);

        require(solutions[hash].account == address(0), "Solution already exists");

        bool verified = verifierContract.verifyTx(a, b, c, input);

        require(verified, "Solution is not accepted");

        solutionsCount.increment();
        solutions[hash] = Solution(solutionsCount.current(), msg.sender, SolutionState.Verified);

        emit SolutionAdded( solutions[hash].index, solutions[hash].account );
    }

    function mintIRealEstateToken(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    {
        bytes32 hash = getSolutionHash(input);

        require(solutions[hash].account == msg.sender, "Not the solution owner");
        require(solutions[hash].state != SolutionState.Minted, "Solution has already been minted");

        mint(solutions[hash].account, solutions[hash].index);
        solutions[hash].state = SolutionState.Minted;
    }


    function getSolutionHash(uint[2] memory input)
    private
    returns (bytes32)
    {
        return keccak256( abi.encodePacked(input[0], input[1]) );
    }

}

contract Verifier {

    function verifyTx(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    )
    public
    returns (bool)
    {
        return true;
    }

}


























