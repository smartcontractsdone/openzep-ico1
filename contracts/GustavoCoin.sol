pragma solidity 0.4.24;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract GustavoCoin is MintableToken {
    string public name = "GUSTVO COIN";
    string public symbol = "GUS";
    uint8 public decimals = 18;
}
