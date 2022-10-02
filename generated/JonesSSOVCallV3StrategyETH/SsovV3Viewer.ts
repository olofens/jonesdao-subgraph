// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class SsovV3Viewer__getWritePositionValueResult {
  value0: BigInt;
  value1: Array<BigInt>;

  constructor(value0: BigInt, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class SsovV3Viewer extends ethereum.SmartContract {
  static bind(address: Address): SsovV3Viewer {
    return new SsovV3Viewer("SsovV3Viewer", address);
  }

  getEpochStrikeTokens(epoch: BigInt, ssov: Address): Array<Address> {
    let result = super.call(
      "getEpochStrikeTokens",
      "getEpochStrikeTokens(uint256,address):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );

    return result[0].toAddressArray();
  }

  try_getEpochStrikeTokens(
    epoch: BigInt,
    ssov: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getEpochStrikeTokens",
      "getEpochStrikeTokens(uint256,address):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTotalEpochOptionsPurchased(epoch: BigInt, ssov: Address): Array<BigInt> {
    let result = super.call(
      "getTotalEpochOptionsPurchased",
      "getTotalEpochOptionsPurchased(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getTotalEpochOptionsPurchased(
    epoch: BigInt,
    ssov: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTotalEpochOptionsPurchased",
      "getTotalEpochOptionsPurchased(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getTotalEpochPremium(epoch: BigInt, ssov: Address): Array<BigInt> {
    let result = super.call(
      "getTotalEpochPremium",
      "getTotalEpochPremium(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getTotalEpochPremium(
    epoch: BigInt,
    ssov: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTotalEpochPremium",
      "getTotalEpochPremium(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getTotalEpochStrikeDeposits(epoch: BigInt, ssov: Address): Array<BigInt> {
    let result = super.call(
      "getTotalEpochStrikeDeposits",
      "getTotalEpochStrikeDeposits(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getTotalEpochStrikeDeposits(
    epoch: BigInt,
    ssov: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTotalEpochStrikeDeposits",
      "getTotalEpochStrikeDeposits(uint256,address):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(ssov)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getWritePositionValue(
    tokenId: BigInt,
    ssov: Address
  ): SsovV3Viewer__getWritePositionValueResult {
    let result = super.call(
      "getWritePositionValue",
      "getWritePositionValue(uint256,address):(uint256,uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromAddress(ssov)
      ]
    );

    return new SsovV3Viewer__getWritePositionValueResult(
      result[0].toBigInt(),
      result[1].toBigIntArray()
    );
  }

  try_getWritePositionValue(
    tokenId: BigInt,
    ssov: Address
  ): ethereum.CallResult<SsovV3Viewer__getWritePositionValueResult> {
    let result = super.tryCall(
      "getWritePositionValue",
      "getWritePositionValue(uint256,address):(uint256,uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromAddress(ssov)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SsovV3Viewer__getWritePositionValueResult(
        value[0].toBigInt(),
        value[1].toBigIntArray()
      )
    );
  }

  walletOfOwner(owner: Address, ssov: Address): Array<BigInt> {
    let result = super.call(
      "walletOfOwner",
      "walletOfOwner(address,address):(uint256[])",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(ssov)]
    );

    return result[0].toBigIntArray();
  }

  try_walletOfOwner(
    owner: Address,
    ssov: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "walletOfOwner",
      "walletOfOwner(address,address):(uint256[])",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(ssov)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}
