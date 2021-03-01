pragma solidity >= 0.5.0;
import './ERC721Mintable.sol';
import './Verifier.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is Verifier, ERC721Mintable {
    Verifier verifierContract;
    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint[2] a;
        uint[2][2] b;
        uint[2] c;
        uint[2] input;
        address solutionAddress;
        uint256 tokenId;
    }

    // TODO define an array of the above struct
    mapping(bytes32 => Solution) solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) solutionsSubmitted;

    constructor(address verifierAddress)
        ERC721Mintable() public
    {
        verifierContract = Verifier(verifierAddress);
    }

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address solutionAddress);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input, address solutionAddress, uint256 tokenId) public returns (bool) {
        Solution memory currentSolution = Solution(a, b, c, input, solutionAddress, tokenId);
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input, solutionAddress, tokenId));
        solutions[key] = currentSolution;
        emit SolutionAdded(msg.sender);
        bool verified = verifiedMint(key, solutionAddress, tokenId);
        return verified;
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function verifiedMint(bytes32 key, address solutionAddress, uint256 tokenId) public returns (bool) {
        require(solutionsSubmitted[key] == false, "Solution already exists");
        bool verificationResult = false;
        Solution memory currentSolution = solutions[key];
        bool verification = verifierContract.verifyTx(currentSolution.a, currentSolution.b, currentSolution.c, currentSolution.input);
        if (verification == true) {
            solutionsSubmitted[key] = true;
            super.mint(solutionAddress, tokenId);
            verificationResult = true;
        }
        return verificationResult;
    }
}
