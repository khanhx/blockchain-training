// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    struct LockInfo {
        uint amount;
        uint unlockTime;
    }
    
    mapping(address => LockInfo) private lockMap;
    
    event TokenLocked(address indexed user, uint amount, uint unlockTime);
    event TokenUnlocked(address indexed user, uint amount);

    function getLockInfo() public view returns (LockInfo memory) {
        return lockMap[msg.sender];
    }

    function lockTokens(uint _minutes) public payable {
        require(_minutes > 0, "Lock period must be greater than 0 minutes");
        require(msg.value > 0, "Must lock some tokens");
        require(lockMap[msg.sender].amount == 0, "Already have locked tokens");
        
        uint lockPeriod = _minutes * 1 minutes;
        uint newUnlockTime = block.timestamp + lockPeriod;
        
        lockMap[msg.sender] = LockInfo({
            amount: msg.value,
            unlockTime: newUnlockTime
        });
        
        emit TokenLocked(msg.sender, msg.value, newUnlockTime);
    }
    
    function unlock() public {
        LockInfo memory userLock = lockMap[msg.sender];
        require(userLock.amount > 0, "No tokens locked");
        require(block.timestamp >= userLock.unlockTime, "Tokens are still locked");
        
        uint amount = userLock.amount;
        delete lockMap[msg.sender];
        
        (bool success,) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        
        emit TokenUnlocked(msg.sender, amount);
    }
}
