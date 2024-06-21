"use client";

// react
import { useState, useRef } from "react";
// next
import Image from "next/image";
// imports
import { toast } from "sonner";
import { CircleHelp } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SubmitHandler, useForm } from "react-hook-form";
// wagmi
import { parseEther, formatEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { readContract, waitForTransactionReceipt } from "@wagmi/core";

// abis
import { abi as routerAbi } from "@/common/abis/DEXRouter.json";
import { abi as factoryAbi } from "@/common/abis/DEXFactory.json";

// config
import { rainbowClientConfig } from "@/common/config";

// components
import Button from "../Button";
// ui components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button as ShadButton } from "@/components/ui/button";

// assets
import { Eth, Settings, SwapIcon } from "@/assets/index";

// form schema
import { formSchema, FormValues } from "./form-schema";

// constants
import { cediToken, rampToken, supportedTokens } from "./contants";

const Dex = () => {
  // typing ref
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // state
  const [swapping, setSwapping] = useState(false);
  const [activeTab, setActiveTab] = useState("swap"); // State to manage active tab
  const [calculating, setCalculating] = useState(false);

  // form hook
  const {
    watch,
    setValue,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      from: {
        token: cediToken.symbol,
        amount: "0",
      },
      to: {
        token: rampToken.symbol,
        amount: "0",
      },
      settings: {
        slippage: 5,
        deadline: 20,
      },
    },
    resolver: zodResolver(formSchema),
  });

  // wagmi hooks
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // handlers
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    event?.preventDefault();

    setSwapping(true);

    try {
      const fromToken = supportedTokens.find(
        (token) => token.symbol === getValues("from.token")
      );
      const toToken = supportedTokens.find(
        (token) => token.symbol === getValues("to.token")
      );

      // check if the user has enough allowance for the from token
      const fromAllowanceResult: bigint = (await readContract(
        rainbowClientConfig,
        {
          abi: fromToken!.abi,
          address: fromToken!.address as `0x${string}`,
          functionName: "allowance",
          args: [address, process.env.DEX_ROUTER_CONTRACT_ADDRESS],
        }
      )) as bigint;

      const hasEnoughFromAllowance =
        fromAllowanceResult &&
        fromAllowanceResult >= parseEther(getValues("from.amount"));

      if (!hasEnoughFromAllowance) {
        // if not, approve the token
        const tx = await writeContractAsync({
          abi: fromToken!.abi,
          address: fromToken!.address as `0x${string}`,
          functionName: "approve",
          args: [
            process.env.DEX_ROUTER_CONTRACT_ADDRESS,
            parseEther(getValues("from.amount")),
          ],
        });

        // wait for the transaction to be mined
        await waitForTransactionReceipt(rainbowClientConfig, {
          hash: tx,
        });
      }

      // check if the user has enough allowance for the to token
      // const toAllowanceResult: bigint = (await readContract(
      //   rainbowClientConfig,
      //   {
      //     abi: toToken!.abi,
      //     address: toToken!.address as `0x${string}`,
      //     functionName: "allowance",
      //     args: [address, process.env.DEX_ROUTER_CONTRACT_ADDRESS],
      //   }
      // )) as bigint;

      // const hasEnoughToAllowance =
      //   toAllowanceResult &&
      //   toAllowanceResult >= parseEther(getValues("to.amount"));

      // // if not, approve the token
      // if (!hasEnoughToAllowance) {
      //   // if not, approve the token
      //   const tx = await writeContractAsync({
      //     abi: toToken!.abi,
      //     address: toToken!.address as `0x${string}`,
      //     functionName: "approve",
      //     args: [
      //       process.env.DEX_ROUTER_CONTRACT_ADDRESS,
      //       parseEther(getValues("to.amount")),
      //     ],
      //   });

      //   // wait for the transaction to be mined
      //   await waitForTransactionReceipt(rainbowClientConfig, {
      //     hash: tx,
      //   });
      // }

      // swap tokens
      const tx = await writeContractAsync({
        abi: routerAbi,
        address: process.env.DEX_ROUTER_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "swapExactTokensForTokens",
        args: [
          parseEther(data.from.amount),
          parseEther(data.to.amount),
          [
            fromToken!.address as `0x${string}`,
            toToken!.address as `0x${string}`,
          ],
          address,
          Date.now() + 1000 * 60 * (data.settings?.deadline ?? 10), // deadline 10 minutes
        ],
      });

      // wait for the transaction to be mined
      await waitForTransactionReceipt(rainbowClientConfig, {
        hash: tx,
      });

      // reset form values
      setValue("from.amount", "0");
      setValue("to.amount", "0");

      // toast success message
      toast.success("Swap successful");
    } catch (error) {
      console.log(error);
      toast.error("An error occured swapping tokens");
    } finally {
      setSwapping(false);
    }
  };

  const calculateAmountsOnFromChange = async (amount: string) => {
    setCalculating(true);
    try {
      const result = await readContract(rainbowClientConfig, {
        abi: routerAbi,
        address: process.env.DEX_ROUTER_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "getAmountsOut",
        args: [
          parseEther(amount),
          [
            supportedTokens.find(
              (token) => token.symbol === getValues("from.token")
            )!.address,
            supportedTokens.find(
              (token) => token.symbol === getValues("to.token")
            )!.address,
          ],
        ],
      });

      const [_, toRawAmount] = result as [bigint, bigint];
      const calculatedToAmount = formatEther(toRawAmount);
      // to 2 decimal places if it's a decimal
      const trimmedCalculatedToAmount =
        Number(calculatedToAmount) % 1 === 0
          ? calculatedToAmount
          : Number(calculatedToAmount).toFixed(2);
      setValue("to.amount", trimmedCalculatedToAmount.toString());
    } catch (error) {
      console.log({ error });
      toast.warning("An error occurred while calculating amounts");
    } finally {
      setCalculating(false);
    }
  };

  const calculateAmountsOnToChange = async (amount: string) => {
    setCalculating(true);
    try {
      const result = await readContract(rainbowClientConfig, {
        abi: routerAbi,
        address: process.env.DEX_ROUTER_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "getAmountsIn",
        args: [
          parseEther(amount),
          [
            supportedTokens.find(
              (token) => token.symbol === getValues("from.token")
            )!.address,
            supportedTokens.find(
              (token) => token.symbol === getValues("to.token")
            )!.address,
          ],
        ],
      });

      const [fromRawAmount, _] = result as [bigint, bigint];
      const calculatedFromAmount = formatEther(fromRawAmount);
      // to 2 decimal places if it's a decimal
      const trimmedCalculatedFromAmount =
        Number(calculatedFromAmount) % 1 === 0
          ? calculatedFromAmount
          : Number(calculatedFromAmount).toFixed(2);
      setValue("from.amount", trimmedCalculatedFromAmount.toString());
    } catch (error) {
      console.log({ error });
      toast.warning("An error occurred while calculating amounts");
    } finally {
      setCalculating(false);
    }
  };

  return (
    <div className="relative w-[500px] h-auto bg-[#14161B] rounded-lg p-6 flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center mb-4">
        <div className="flex flex-row">
          <div
            className={`cursor-pointer px-4 py-2 pl-0 rounded-tl-lg rounded-bl-lg ${
              activeTab === "swap"
                ? "bg-transparent text-white"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => handleTabClick("swap")}
          >
            Swap
          </div>
          <div
            className={`cursor-pointer px-4 py-2  pl-0rounded-tr-lg rounded-br-lg ${
              activeTab === "limit"
                ? "bg-transparent text-white"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => handleTabClick("limit")}
          >
            Limit
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <ShadButton
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => console.log("swap")}
              className="rounded-full hover:shadow-inner"
            >
              <Image src={Settings} alt="settings" width={20} height={20} />
            </ShadButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">Settings</DialogTitle>
              <DialogDescription>
                Customize your experience by configuring the settings
              </DialogDescription>
            </DialogHeader>
            <Separator />
            <div className="flex flex-col gap-6">
              {/* Gas Fees */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <h4 className="text-base font-medium">
                    Transaction Speed (Gwei)
                  </h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp size={16} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Adjusts the gas price (transaction fee) for your
                          transaction.
                          <br />
                          Higher GWEI = higher speed = higher fees.
                        </p>
                        <br />
                        <p>
                          Choose “Default” to use the settings from your current
                          <br />
                          blockchain RPC node.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 flex-1 gap-3">
                  <ShadButton
                    variant="default"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl"
                  >
                    Default
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl"
                  >
                    Standard (1)
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl"
                  >
                    Fast (4)
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl"
                  >
                    Instant (5)
                  </ShadButton>
                </div>
              </div>
              {/* Slippage */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <h4 className="text-base font-medium">Slippage Tolerance</h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp size={16} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Setting a high slippage tolerance
                          <br />
                          can help transactions succeed,
                          <br />
                          but you may not get such a good price.
                          <br />
                          Use with caution.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-row gap-1.5 flex-wrap">
                  <ShadButton
                    variant="default"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    0.1%
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    0.5%
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    1.0%
                  </ShadButton>
                  <div className="flex items-center gap-1">
                    <Input
                      type="text"
                      className="max-w-[65px] !h-9 text-xs rounded-2xl text-center placeholder:text-center font-medium placeholder:font-medium border-2"
                      placeholder="1.5"
                    />
                    <span className="text-xs">%</span>
                  </div>
                </div>
              </div>
              {/* Deadline */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <h4 className="text-base font-medium">
                    Transaction Deadline
                  </h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp size={16} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          The transaction will revert if it is pending
                          <br />
                          for more than this duration.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-row gap-1.5">
                  <ShadButton
                    variant="default"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    10m
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    20m
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl"
                  >
                    30m
                  </ShadButton>
                  <div className="flex items-center gap-1">
                    <Input
                      type="text"
                      className="max-w-[65px] !h-9 text-xs rounded-2xl text-center placeholder:text-center font-medium placeholder:font-medium border-2"
                      placeholder="45"
                    />
                    <span className="text-xs">min(s)</span>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="mt-5 sm:justify-start">
              <DialogClose asChild>
                <Button text="Done" className="w-full" />
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="w-full">
            <div className="w-full flex flex-col mt-2 px-3 py-3 bg-[#1D2027] rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <div className="text-gray-500">Sell</div>
                <Select
                  value={watch("from.token")}
                  onValueChange={(value) => {
                    // check if the value is also selected on to side
                    if (value === getValues("to.token")) {
                      const oldToken = getValues("from.token");
                      setValue("to.token", oldToken);
                      setValue("to.amount", "0");
                      setValue("from.token", value);
                      setValue("from.amount", "0");
                    }
                  }}
                >
                  <SelectTrigger className="w-[90px] pr-2 rounded-xl">
                    <SelectValue placeholder="Token" className="uppercase" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportedTokens.map((token) => (
                      <SelectItem key={token.address} value={token.symbol}>
                        <div className="flex flex-row gap-x-1.5">
                          {/* <Image src={Eth} alt="icon" width={15} height={50} /> */}
                          <span>{token.symbol}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full py-3">
                <Input
                  type="number"
                  {...register("from.amount", {
                    pattern: {
                      // should be a valid non-negative number or decimal
                      value: /^[0-9]+(\.[0-9]{1,18})?$/,
                      message: "Please enter a valid amount",
                    },
                  })}
                  onChange={(e) => {
                    // clear previous timeout
                    if (typingTimeoutRef.current) {
                      clearTimeout(typingTimeoutRef.current);
                    }

                    // set a new timeout
                    typingTimeoutRef.current = setTimeout(() => {
                      calculateAmountsOnFromChange(e.target.value);
                    }, 500);
                  }}
                  defaultValue={0}
                  className="bg-transparent outline-none border-none text-white"
                />
              </div>
            </div>
          </div>
          <div className="absolute z-50 top-[calc(50%_-_25px)] w-full flex justify-center items-start">
            <Image src={SwapIcon} alt="Logo" width={50} height={50} />
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col mt-2 px-3 py-3 bg-[#1D2027] rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <div className="text-gray-500">Buy</div>
                <Select
                  value={watch("to.token")}
                  onValueChange={(value) => {
                    // check if the value is also selected on from side
                    if (value === getValues("from.token")) {
                      const oldToken = getValues("to.token");
                      setValue("from.token", oldToken);
                      setValue("from.amount", "0");
                      setValue("to.token", value);
                      setValue("to.amount", "0");
                    }
                  }}
                >
                  <SelectTrigger className="w-[90px] pr-2 rounded-xl">
                    <SelectValue placeholder="Token" className="uppercase" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportedTokens.map((token) => (
                      <SelectItem key={token.address} value={token.symbol}>
                        <div className="flex flex-row gap-x-1.5">
                          {/* <Image src={Eth} alt="icon" width={15} height={50} /> */}
                          <span>{token.symbol}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full py-3">
                <Input
                  type="input"
                  {...register("to.amount", {
                    pattern: {
                      // should be a valid non-negative number or decimal
                      value: /^[0-9]+(\.[0-9]{1,18})?$/,
                      message: "Please enter a valid amount",
                    },
                  })}
                  onChange={(e) => {
                    // clear previous timeout
                    if (typingTimeoutRef.current) {
                      clearTimeout(typingTimeoutRef.current);
                    }

                    // set a new timeout
                    typingTimeoutRef.current = setTimeout(() => {
                      calculateAmountsOnToChange(e.target.value);
                    }, 500);
                  }}
                  defaultValue={0}
                  className="bg-transparent outline-none border-none text-white"
                />
              </div>
            </div>
          </div>
        </div>
        {isConnected ? (
          <Button
            loading={swapping}
            disabled={swapping || calculating}
            className="w-full mt-3"
          >
            Swap
          </Button>
        ) : (
          <div className="flex items-center justify-center mt-3">
            <ConnectButton />
          </div>
        )}
      </form>
    </div>
  );
};

export default Dex;
