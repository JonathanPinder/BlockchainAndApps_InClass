pragma solidity >=0.4.4;

contract HelloEthSalon {
  string message = 'Hello Ethereum Salon!';
  
  constructor() public {
    // constructor
  }

  function GetMessage() public returns (string memory) {
    return message;
  }
}
