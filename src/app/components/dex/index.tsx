"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// imports
import { CircleHelp } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

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

const Dex = () => {
  // state
  const [activeTab, setActiveTab] = useState("swap"); // State to manage active tab

  // form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // handlers
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault();

    console.log({ swapData: data });
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
            onClick={() => handleTabClick("swap")}>
            Swap
          </div>
          <div
            className={`cursor-pointer px-4 py-2  pl-0rounded-tr-lg rounded-br-lg ${
              activeTab === "limit"
                ? "bg-transparent text-white"
                : "bg-transparent text-gray-500"
            }`}
            onClick={() => handleTabClick("limit")}>
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
              className="rounded-full hover:shadow-inner">
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
                    className="text-xs !font-normal rounded-2xl">
                    Default
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl">
                    Standard (1)
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl">
                    Fast (4)
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="text-xs !font-normal rounded-2xl">
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
                    className="min-w-[65px] text-xs rounded-2xl">
                    0.1%
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl">
                    0.5%
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl">
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
                    className="min-w-[65px] text-xs rounded-2xl">
                    10m
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl">
                    20m
                  </ShadButton>
                  <ShadButton
                    variant="secondary"
                    size="sm"
                    className="min-w-[65px] text-xs rounded-2xl">
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
                <Select {...register("from.token")}>
                  <SelectTrigger className="w-[90px] pr-2 rounded-xl">
                    <SelectValue placeholder="Token" className="uppercase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ETH">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>ETH</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="ARB">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>ARB</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="BNB">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>BNB</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full py-3">
                <input
                  type="text"
                  {...register("from.amount", {
                    pattern: {
                      // should be a valid non-negative number or decimal
                      value: /^[0-9]+(\.[0-9]{1,18})?$/,
                      message: "Please enter a valid amount",
                    },
                  })}
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
                <Select {...register("to.token")}>
                  <SelectTrigger className="w-[90px] pr-2 rounded-xl">
                    <SelectValue placeholder="Token" className="uppercase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ETH">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>ETH</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="ARB">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>ARB</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="BNB">
                      <div className="flex flex-row gap-x-1.5">
                        <Image src={Eth} alt="icon" width={15} height={50} />
                        <span>BNB</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full py-3">
                <input
                  type="text"
                  {...register("to.amount", {
                    pattern: {
                      // should be a valid non-negative number or decimal
                      value: /^[0-9]+(\.[0-9]{1,18})?$/,
                      message: "Please enter a valid amount",
                    },
                  })}
                  defaultValue={0}
                  className="bg-transparent outline-none border-none text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <Button text="Connect Wallet" className="w-full mt-3" />
      </form>
    </div>
  );
};

export default Dex;
