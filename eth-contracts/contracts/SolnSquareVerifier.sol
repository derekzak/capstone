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
        bytes32 key;
    }

    // TODO define an array of the above struct
    mapping(uint256 => Solution) solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) solutionsSubmitted;

    constructor(address verifierAddress) ERC721Mintable() public {
        verifierContract = Verifier(verifierAddress);
    }

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address solutionAddress);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input, address solutionAddress, uint256 tokenId) public returns (bool) {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input, solutionAddress, tokenId));
        Solution memory currentSolution = Solution(a, b, c, input, solutionAddress, tokenId, key);
        solutions[tokenId] = currentSolution;
        emit SolutionAdded(msg.sender);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function verifiedMint(address solutionAddress, uint256 tokenId) public returns (bool) {
        require(solutions[tokenId].solutionAddress != address(0), "Solution does not exist");
        bool verificationResult = false;
        Solution memory currentSolution = solutions[tokenId];
        bool verification = verifierContract.verifyTx(currentSolution.a, currentSolution.b, currentSolution.c, currentSolution.input);
        if (verification == true) {
            solutionsSubmitted[currentSolution.key] = true;
            super.mint(solutionAddress, tokenId);
            verificationResult = true;
        }
        return verificationResult;
    }
}
