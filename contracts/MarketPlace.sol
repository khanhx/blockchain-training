// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.27;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MarketPlace  {
    struct Listing {
        address nftAddress;
        uint256 tokenId;
        address seller;
        uint256 price;
    }

    event NewListing(address indexed nftAddress, uint256 indexed tokenId, address indexed seller, uint256 price);

    Listing[] public listings;

    function list(address nftAddress, uint256 tokenId, uint256 price) public {
        require(IERC721(nftAddress).ownerOf(tokenId) == msg.sender, "You are not the owner of the token");
        require(IERC721(nftAddress).isApprovedForAll(msg.sender, address(this)) || IERC721(nftAddress).getApproved(tokenId) == address(this), "You must approve the marketplace to transfer the token");

        IERC721(nftAddress).transferFrom(msg.sender, address(this), tokenId);
        listings.push(Listing({nftAddress: nftAddress, tokenId: tokenId, seller: msg.sender, price: price}));
        emit NewListing(nftAddress, tokenId, msg.sender, price);
    }

    function getListingByPage(uint256 offset, uint256 limit) public view returns (Listing[] memory) {
        uint256 totalListings = listings.length;
        require(offset < totalListings, "Offset out of bounds");
        
        uint256 endIndex = offset + limit;
        if (endIndex > totalListings) {
            endIndex = totalListings;
        }
        
        uint256 resultSize = endIndex - offset;
        Listing[] memory results = new Listing[](resultSize);
        
        for (uint256 i = 0; i < resultSize; i++) {
            results[i] = listings[offset + i];
        }
        
        return results;
    }
}
