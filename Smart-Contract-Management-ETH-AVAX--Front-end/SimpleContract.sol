// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 private value;
    string private name;

    // Set a value
    function setValue(uint256 _value) public {
        value = _value;
    }

    // Get the value
    function getValue() public view returns (uint256) {
        return value;
    }

    // Set a name
    function setName(string memory _name) public {
        name = _name;
    }

    // Get the name
    function getName() public view returns (string memory) {
        return name;
    }
}
