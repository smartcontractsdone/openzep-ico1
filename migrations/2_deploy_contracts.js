const GustavoCoinCrowdsale = artifacts.require('./GustavoCoinCrowdsale.sol');
const GustavoCoin = artifacts.require('./GustavoCoin.sol');

module.exports = function(deployer, network, accounts) {
	const openingTime = web3.eth.getBlock('latest').timestamp + 2;
	const closingTime = openingTime + 86400 * 20;
	const rate = new web3.BigNumber(1000);
	const wallet = accounts[1];


	return deployer
		.then(() => {
			return deployer.deploy(GustavoCoin);
		})
	        .then(_instance => console.log('Coin Address:'+_instance.address))
		.then(() => {
			return deployer.deploy(
				GustavoCoinCrowdsale,
				openingTime,
				closingTime,
				rate,
				wallet,
				GustavoCoin.address
			);
		})

		.then(_instance => console.log('Contract Address:'+_instance.address));


};
