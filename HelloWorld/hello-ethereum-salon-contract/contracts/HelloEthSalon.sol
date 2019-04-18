pragma solidity >=0.4.4;
  contract HelloEthSalon{
    string public message = "Hello Ethereum Salon!";
    constructor()public{
      //Constructor
    }
    function GetMessage() public returns (string memory){
      return message;
    }
    
  }

