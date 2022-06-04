pragma solidity ^0.6.0;
import "./Crowdsale.sol";
import "./KycContract.sol";
import "./MintedCrowdsale.sol";

contract MyTokenSale is MintedCrowdsale {
    KycContract kyc;

    constructor(
        uint256 rate, // rate in TKNbits
        address payable wallet,
        IERC20 token,
        KycContract _kyc
    ) public MintedCrowdsale() Crowdsale(rate, wallet, token) {
        kyc = _kyc;
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount)
        internal
        view
        override
    {
        super._preValidatePurchase(beneficiary, weiAmount);
        require(
            kyc.kycCompleted(msg.sender),
            "Kyc not completed, purchase not allowed"
        );
    }
}
