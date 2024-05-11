// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

interface IContract {
    function attempt() external;
}

contract Winner {
    function winAttempt(address cont) external {
        IContract(cont).attempt();
    } 
}