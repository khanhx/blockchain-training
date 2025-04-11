/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface LotteryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CYCLE_PERIOD"
      | "feeAddress"
      | "games"
      | "getCurrentCycle"
      | "getCycleEndTime"
      | "guess"
      | "guestAmount"
      | "isValidCycle"
      | "lastCycleStart"
      | "owner"
      | "setFeeAddress"
      | "setGuestAmount"
      | "setTaxPercent"
      | "settleGame"
      | "submitProof"
      | "taxPercent"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeeDistributed"
      | "GameCreated"
      | "GameSettled"
      | "GuessMade"
      | "PrizeDistributed"
      | "ProofSubmitted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CYCLE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "games", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getCurrentCycle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCycleEndTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "guess", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "guestAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isValidCycle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastCycleStart",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setGuestAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxPercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settleGame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitProof",
    values: [BigNumberish, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxPercent",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CYCLE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCycleEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guess", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "guestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastCycleStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGuestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settleGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taxPercent", data: BytesLike): Result;
}

export namespace FeeDistributedEvent {
  export type InputTuple = [gameId: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [gameId: bigint, amount: bigint];
  export interface OutputObject {
    gameId: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameCreatedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    startTime: BigNumberish,
    endTime: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    startTime: bigint,
    endTime: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    startTime: bigint;
    endTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameSettledEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    winNumber: BigNumberish,
    winners: AddressLike[]
  ];
  export type OutputTuple = [
    gameId: bigint,
    winNumber: bigint,
    winners: string[]
  ];
  export interface OutputObject {
    gameId: bigint;
    winNumber: bigint;
    winners: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GuessMadeEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    guess: BytesLike
  ];
  export type OutputTuple = [gameId: bigint, player: string, guess: string];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    guess: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PrizeDistributedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    winner: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [gameId: bigint, winner: string, amount: bigint];
  export interface OutputObject {
    gameId: bigint;
    winner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProofSubmittedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    guess: BytesLike,
    originNumber: BigNumberish,
    nonce: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    guess: string,
    originNumber: bigint,
    nonce: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    guess: string;
    originNumber: bigint;
    nonce: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Lottery extends BaseContract {
  connect(runner?: ContractRunner | null): Lottery;
  waitForDeployment(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CYCLE_PERIOD: TypedContractMethod<[], [bigint], "view">;

  feeAddress: TypedContractMethod<[], [string], "view">;

  games: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, boolean, bigint, bigint, bigint] & {
        totalAmount: bigint;
        isSettled: boolean;
        winNumber: bigint;
        startTime: bigint;
        endTime: bigint;
      }
    ],
    "view"
  >;

  getCurrentCycle: TypedContractMethod<[], [bigint], "view">;

  getCycleEndTime: TypedContractMethod<
    [cycleId: BigNumberish],
    [bigint],
    "view"
  >;

  guess: TypedContractMethod<[_guess: BytesLike], [void], "payable">;

  guestAmount: TypedContractMethod<[], [bigint], "view">;

  isValidCycle: TypedContractMethod<[cycleId: BigNumberish], [boolean], "view">;

  lastCycleStart: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setFeeAddress: TypedContractMethod<
    [_feeAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  setGuestAmount: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTaxPercent: TypedContractMethod<
    [_taxPercent: BigNumberish],
    [void],
    "nonpayable"
  >;

  settleGame: TypedContractMethod<
    [_gameId: BigNumberish],
    [void],
    "nonpayable"
  >;

  submitProof: TypedContractMethod<
    [
      _gameId: BigNumberish,
      _guess: BytesLike,
      _originNumber: BigNumberish,
      _nonce: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  taxPercent: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CYCLE_PERIOD"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "games"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, boolean, bigint, bigint, bigint] & {
        totalAmount: bigint;
        isSettled: boolean;
        winNumber: bigint;
        startTime: bigint;
        endTime: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentCycle"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCycleEndTime"
  ): TypedContractMethod<[cycleId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "guess"
  ): TypedContractMethod<[_guess: BytesLike], [void], "payable">;
  getFunction(
    nameOrSignature: "guestAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isValidCycle"
  ): TypedContractMethod<[cycleId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastCycleStart"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFeeAddress"
  ): TypedContractMethod<[_feeAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGuestAmount"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTaxPercent"
  ): TypedContractMethod<[_taxPercent: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "settleGame"
  ): TypedContractMethod<[_gameId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitProof"
  ): TypedContractMethod<
    [
      _gameId: BigNumberish,
      _guess: BytesLike,
      _originNumber: BigNumberish,
      _nonce: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "taxPercent"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "FeeDistributed"
  ): TypedContractEvent<
    FeeDistributedEvent.InputTuple,
    FeeDistributedEvent.OutputTuple,
    FeeDistributedEvent.OutputObject
  >;
  getEvent(
    key: "GameCreated"
  ): TypedContractEvent<
    GameCreatedEvent.InputTuple,
    GameCreatedEvent.OutputTuple,
    GameCreatedEvent.OutputObject
  >;
  getEvent(
    key: "GameSettled"
  ): TypedContractEvent<
    GameSettledEvent.InputTuple,
    GameSettledEvent.OutputTuple,
    GameSettledEvent.OutputObject
  >;
  getEvent(
    key: "GuessMade"
  ): TypedContractEvent<
    GuessMadeEvent.InputTuple,
    GuessMadeEvent.OutputTuple,
    GuessMadeEvent.OutputObject
  >;
  getEvent(
    key: "PrizeDistributed"
  ): TypedContractEvent<
    PrizeDistributedEvent.InputTuple,
    PrizeDistributedEvent.OutputTuple,
    PrizeDistributedEvent.OutputObject
  >;
  getEvent(
    key: "ProofSubmitted"
  ): TypedContractEvent<
    ProofSubmittedEvent.InputTuple,
    ProofSubmittedEvent.OutputTuple,
    ProofSubmittedEvent.OutputObject
  >;

  filters: {
    "FeeDistributed(uint256,uint256)": TypedContractEvent<
      FeeDistributedEvent.InputTuple,
      FeeDistributedEvent.OutputTuple,
      FeeDistributedEvent.OutputObject
    >;
    FeeDistributed: TypedContractEvent<
      FeeDistributedEvent.InputTuple,
      FeeDistributedEvent.OutputTuple,
      FeeDistributedEvent.OutputObject
    >;

    "GameCreated(uint256,uint256,uint256)": TypedContractEvent<
      GameCreatedEvent.InputTuple,
      GameCreatedEvent.OutputTuple,
      GameCreatedEvent.OutputObject
    >;
    GameCreated: TypedContractEvent<
      GameCreatedEvent.InputTuple,
      GameCreatedEvent.OutputTuple,
      GameCreatedEvent.OutputObject
    >;

    "GameSettled(uint256,uint8,address[])": TypedContractEvent<
      GameSettledEvent.InputTuple,
      GameSettledEvent.OutputTuple,
      GameSettledEvent.OutputObject
    >;
    GameSettled: TypedContractEvent<
      GameSettledEvent.InputTuple,
      GameSettledEvent.OutputTuple,
      GameSettledEvent.OutputObject
    >;

    "GuessMade(uint256,address,bytes32)": TypedContractEvent<
      GuessMadeEvent.InputTuple,
      GuessMadeEvent.OutputTuple,
      GuessMadeEvent.OutputObject
    >;
    GuessMade: TypedContractEvent<
      GuessMadeEvent.InputTuple,
      GuessMadeEvent.OutputTuple,
      GuessMadeEvent.OutputObject
    >;

    "PrizeDistributed(uint256,address,uint256)": TypedContractEvent<
      PrizeDistributedEvent.InputTuple,
      PrizeDistributedEvent.OutputTuple,
      PrizeDistributedEvent.OutputObject
    >;
    PrizeDistributed: TypedContractEvent<
      PrizeDistributedEvent.InputTuple,
      PrizeDistributedEvent.OutputTuple,
      PrizeDistributedEvent.OutputObject
    >;

    "ProofSubmitted(uint256,bytes32,uint8,uint256)": TypedContractEvent<
      ProofSubmittedEvent.InputTuple,
      ProofSubmittedEvent.OutputTuple,
      ProofSubmittedEvent.OutputObject
    >;
    ProofSubmitted: TypedContractEvent<
      ProofSubmittedEvent.InputTuple,
      ProofSubmittedEvent.OutputTuple,
      ProofSubmittedEvent.OutputObject
    >;
  };
}
