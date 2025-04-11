/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/Erc20.sol/MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61016060405234801561001157600080fd5b50604051611709380380611709833981016040819052610030916103f1565b6040518060400160405280600781526020016626bcaa37b5b2b760c91b81525080604051806040016040528060018152602001603160f81b815250836040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b81525081600390816100b791906104c0565b5060046100c482826104c0565b5050506001600160a01b0381166100f657604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6100ff816101ca565b5061010b82600661021c565b6101205261011a81600761021c565b61014052815160208084019190912060e052815190820120610100524660a0526101a760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506101c433683635c9adc5dea0000061024f565b50610611565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020835110156102385761023183610289565b9050610249565b8161024384826104c0565b5060ff90505b92915050565b6001600160a01b0382166102795760405163ec442f0560e01b8152600060048201526024016100ed565b610285600083836102c7565b5050565b600080829050601f815111156102b4578260405163305a27a960e01b81526004016100ed919061057e565b80516102bf826105cc565b179392505050565b6001600160a01b0383166102f25780600260008282546102e791906105f0565b909155506103649050565b6001600160a01b038316600090815260208190526040902054818110156103455760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016100ed565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166103805760028054829003905561039f565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516103e491815260200190565b60405180910390a3505050565b60006020828403121561040357600080fd5b81516001600160a01b038116811461041a57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061044b57607f821691505b60208210810361046b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156104bb57806000526020600020601f840160051c810160208510156104985750805b601f840160051c820191505b818110156104b857600081556001016104a4565b50505b505050565b81516001600160401b038111156104d9576104d9610421565b6104ed816104e78454610437565b84610471565b6020601f82116001811461052157600083156105095750848201515b600019600385901b1c1916600184901b1784556104b8565b600084815260208120601f198516915b828110156105515787850151825560209485019460019092019101610531565b508482101561056f5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156105ac576020818601810151604086840101520161058f565b506000604082850101526040601f19601f83011684010191505092915050565b8051602080830151919081101561046b5760001960209190910360031b1b16919050565b8082018082111561024957634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e05161010051610120516101405161109e61066b60003960006108a101526000610874015260006107670152600061073f0152600061069a015260006106c4015260006106ee015261109e6000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a257806395d89b411161007157806395d89b411461021c578063a9059cbb14610224578063d505accf14610237578063dd62ed3e1461024a578063f2fde38b1461028357600080fd5b8063715018a6146101cb5780637ecebe00146101d357806384b0196e146101e65780638da5cb5b1461020157600080fd5b8063313ce567116100de578063313ce567146101765780633644e5151461018557806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015157806323b872dd14610163575b600080fd5b610118610296565b6040516101259190610e01565b60405180910390f35b61014161013c366004610e37565b610328565b6040519015158152602001610125565b6002545b604051908152602001610125565b610141610171366004610e61565b610342565b60405160128152602001610125565b610155610366565b6101a061019b366004610e37565b610375565b005b6101556101b0366004610e9e565b6001600160a01b031660009081526020819052604090205490565b6101a061038b565b6101556101e1366004610e9e565b61039f565b6101ee6103bd565b6040516101259796959493929190610eb9565b6005546040516001600160a01b039091168152602001610125565b610118610403565b610141610232366004610e37565b610412565b6101a0610245366004610f51565b610420565b610155610258366004610fc4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101a0610291366004610e9e565b61055f565b6060600380546102a590610ff7565b80601f01602080910402602001604051908101604052809291908181526020018280546102d190610ff7565b801561031e5780601f106102f35761010080835404028352916020019161031e565b820191906000526020600020905b81548152906001019060200180831161030157829003601f168201915b5050505050905090565b60003361033681858561059d565b60019150505b92915050565b6000336103508582856105af565b61035b85858561062e565b506001949350505050565b600061037061068d565b905090565b61037d6107b8565b61038782826107e5565b5050565b6103936107b8565b61039d600061081b565b565b6001600160a01b03811660009081526008602052604081205461033c565b6000606080600080600060606103d161086d565b6103d961089a565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6060600480546102a590610ff7565b60003361033681858561062e565b834211156104495760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104968c6001600160a01b0316600090815260086020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006104f1826108c7565b90506000610501828787876108f4565b9050896001600160a01b0316816001600160a01b031614610548576040516325c0072360e11b81526001600160a01b0380831660048301528b166024820152604401610440565b6105538a8a8a61059d565b50505050505050505050565b6105676107b8565b6001600160a01b03811661059157604051631e4fbdf760e01b815260006004820152602401610440565b61059a8161081b565b50565b6105aa8383836001610922565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610628578181101561061957604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610440565b61062884848484036000610922565b50505050565b6001600160a01b03831661065857604051634b637e8f60e11b815260006004820152602401610440565b6001600160a01b0382166106825760405163ec442f0560e01b815260006004820152602401610440565b6105aa8383836109f7565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156106e657507f000000000000000000000000000000000000000000000000000000000000000046145b1561071057507f000000000000000000000000000000000000000000000000000000000000000090565b610370604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6005546001600160a01b0316331461039d5760405163118cdaa760e01b8152336004820152602401610440565b6001600160a01b03821661080f5760405163ec442f0560e01b815260006004820152602401610440565b610387600083836109f7565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103707f00000000000000000000000000000000000000000000000000000000000000006006610b21565b60606103707f00000000000000000000000000000000000000000000000000000000000000006007610b21565b600061033c6108d461068d565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061090688888888610bcc565b9250925092506109168282610c9b565b50909695505050505050565b6001600160a01b03841661094c5760405163e602df0560e01b815260006004820152602401610440565b6001600160a01b03831661097657604051634a1406b160e11b815260006004820152602401610440565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561062857826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109e991815260200190565b60405180910390a350505050565b6001600160a01b038316610a22578060026000828254610a179190611031565b90915550610a949050565b6001600160a01b03831660009081526020819052604090205481811015610a755760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610440565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610ab057600280548290039055610acf565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b1491815260200190565b60405180910390a3505050565b606060ff8314610b3b57610b3483610d54565b905061033c565b818054610b4790610ff7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7390610ff7565b8015610bc05780601f10610b9557610100808354040283529160200191610bc0565b820191906000526020600020905b815481529060010190602001808311610ba357829003601f168201915b5050505050905061033c565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c075750600091506003905082610c91565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610c5b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c8757506000925060019150829050610c91565b9250600091508190505b9450945094915050565b6000826003811115610caf57610caf611052565b03610cb8575050565b6001826003811115610ccc57610ccc611052565b03610cea5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610cfe57610cfe611052565b03610d1f5760405163fce698f760e01b815260048101829052602401610440565b6003826003811115610d3357610d33611052565b03610387576040516335e2f38360e21b815260048101829052602401610440565b60606000610d6183610d93565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f81111561033c57604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610de157602081850181015186830182015201610dc5565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e146020830184610dbb565b9392505050565b80356001600160a01b0381168114610e3257600080fd5b919050565b60008060408385031215610e4a57600080fd5b610e5383610e1b565b946020939093013593505050565b600080600060608486031215610e7657600080fd5b610e7f84610e1b565b9250610e8d60208501610e1b565b929592945050506040919091013590565b600060208284031215610eb057600080fd5b610e1482610e1b565b60ff60f81b8816815260e060208201526000610ed860e0830189610dbb565b8281036040840152610eea8189610dbb565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610f40578351835260209384019390920191600101610f22565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610f6c57600080fd5b610f7588610e1b565b9650610f8360208901610e1b565b95506040880135945060608801359350608088013560ff81168114610fa757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610fd757600080fd5b610fe083610e1b565b9150610fee60208401610e1b565b90509250929050565b600181811c9082168061100b57607f821691505b60208210810361102b57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561033c57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212207103c19b4f1e695c63044362b56d9baba6e478972ea476b95a8608deee5f005c64736f6c634300081c0033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      MyToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyToken__factory {
    return super.connect(runner) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new Interface(_abi) as MyTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyToken {
    return new Contract(address, _abi, runner) as unknown as MyToken;
  }
}
