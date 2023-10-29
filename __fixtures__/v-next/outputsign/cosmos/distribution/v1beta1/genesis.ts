import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, Params, ParamsSDKType, FeePool, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdrawAddress: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstandingRewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: bigint;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** starting_info defines the starting info of a delegator. */
  startingInfo: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** height defines the block height at which the slash event occured. */
  height: bigint;
  /** period is the period of the slash event. */
  period: bigint;
  /** validator_slash_event describes the slash event. */
  validatorSlashEvent: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: bigint;
  period: bigint;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  feePool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegatorWithdrawInfos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previousProposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstandingRewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegatorStartingInfos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validatorSlashEvents: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.outstandingRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validatorAddress: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validatorAddress: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== undefined) {
      DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== undefined) {
      ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePool: FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feePool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};