var HelloEthSalon = artifacts.require('HelloEthSalon');

contract('HelloEthSalon:GetMessage', function(accounts) {
  it("should return a correct string", function(done) {
    //Below is a Promise
    var hello_eth_salon = HelloEthSalon.deployed();
    hello_eth_salon.then(function(contract){
      return contract.GetMessage.call();//VERY IMPORTANT
    }).then(function(result){
      assert.isTrue(result ==='Hello Ethereum Salon!');
      done();
    })
  });
});

