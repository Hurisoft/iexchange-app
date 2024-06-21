// abis
import { abi as rampAbi } from "@/common/abis/Ramp.json";
import { abi as cediAbi } from "@/common/abis/CediH.json";

export const cediToken = {
  abi: cediAbi,
  name: "Cedih",
  symbol: "CEDIH",
  address: "0xACBC1eC300bBea9A9FD0A661cD717d8519c5FCA5",
};

export const rampToken = {
  abi: rampAbi,
  name: "Ramp",
  symbol: "RMP",
  address: "0x28cB409154beb695D5E9ffA85dA8f1564Aa3cD76",
};

export const supportedTokens = [cediToken, rampToken];
