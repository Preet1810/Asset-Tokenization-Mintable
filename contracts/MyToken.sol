// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ERC20Mintable.sol";

contract MyToken is ERC20Mintable {
    constructor()
        public
        ERC20("BurgerPrince Token", "Burgo") // 0 is for decimals
    {
        _setupDecimals(0);
    }
}
