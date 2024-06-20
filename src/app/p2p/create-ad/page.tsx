"use client";

// react
import { useState } from "react";
// imports
import { toast } from "sonner";
import { parseEther } from "viem";
import { useWriteContract, useAccount } from "wagmi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// abi
import { abi as P2PAbi } from "@/common/abis/OptimisticP2P.json";

// components
import { Button, MenuItem, NavLink, Footer } from "@/app/components";
// ui components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// hooks
import { useSupportedP2PTokens } from "@/common/hooks/queries";

// constants
const items = [
  { label: "Help Center", href: "/item1" },
  { label: "Item 2", href: "/item2" },
  { label: "Item 3", href: "/item3" },
];

// form schema
import { formSchema, FormValues } from "./form-schema";

// types
import {
  SupportedCurrencies,
  SupportedMethods,
  TradeType,
} from "@/common/types";

const CreateAdPage = () => {
  // state
  const [options, setOptions] = useState([
    "iExchange P2P Market",
    "MyAdds",
    "Appealed Orders",
  ]);
  const [activeSubMenu, setActiveSubMenu] = useState("iExchange P2P Market");

  // form hooks
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      currency: SupportedCurrencies.GHS,
      paymentMethod: SupportedMethods.momo,
      offerType: TradeType.buy,
    },
    resolver: zodResolver(formSchema),
  });
  // contract hooks
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();
  // hooks
  const { data: supportedP2PTokens } = useSupportedP2PTokens();

  console.log({ errors });

  // handlers
  const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
    event?.preventDefault();

    if (!isConnected || !address) {
      toast.error("Please connect your wallet to proceed.");
      return;
    }

    const selectedToken = supportedP2PTokens?.find(
      (token) => token.symbol === data.token
    );

    try {
      // TODO: get account hash from abi with user address
      const accountHash =
        "0x90860c85645748f61a8fbf83c77a0ded3ea88a61000855a3581a326b92cd69c1";

      await writeContractAsync({
        abi: P2PAbi,
        address: process.env.P2P_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "createOffer",
        args: [
          selectedToken!.id,
          data.currency,
          data.paymentMethod,
          data.rate,
          parseEther(data.minAmount.toString()),
          parseEther(data.maxAmount.toString()),
          accountHash,
          address,
          data.offerType,
        ],
      });

      toast.success("Advert created successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col">
      <div className="w-full flex flex-col border-b border-[#C3D5F126] pb-0 bg-[#181A20F2] text-white fixed top-0 left-0 z-50">
        <div className="w-full p-6 flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-6">
            <div className="flex flex-row items-center text-2xl">
              <span className="text-[#fffsetMerchantStakeOpenfff] font-light">
                Dex
              </span>
              <span className="text-[#1ABCFE] font-bold">Ram</span>
            </div>
            <div className="flex flex-row">
              <NavLink href="/">Swap</NavLink>
              <NavLink href="/explore">Explore</NavLink>
              <NavLink href="/p2p">P2P</NavLink>
              <NavLink href="/pool">Pool</NavLink>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <Button text="Become a Settler" />
            <Button text="Become a Merchant" />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center space-x-10">
            <div className="flex flex-row space-x-4">
              text
              {options.map((option, i) => (
                <span
                  onClick={() => setActiveSubMenu(option)}
                  key={i}
                  className={`px-4 py-6 pt-0 text-sm font-medium cursor-pointer ${
                    activeSubMenu === option
                      ? "text-white border-b border-[#FFB323]"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </span>
              ))}
            </div>
            <div className="flex flex-row items-center space-x-10">
              <MenuItem
                link="Help Center"
                options={items}
                showDropdown={true}
              />
              <MenuItem link="Transactions" showDropdown={false} />
              <MenuItem
                link="Account Details"
                options={items}
                showDropdown={true}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Form Area */}
      <div className="min-h-screen pt-40 container mx-auto space-y-10">
        <div className="py-10">
          <Tabs
            defaultValue="buy"
            onValueChange={(value) => {
              if (value === "buy") {
                setValue("offerType", TradeType.buy);
              } else {
                setValue("offerType", TradeType.sell);
              }
            }}
          >
            <TabsList>
              <TabsTrigger value="buy">I Want To Buy</TabsTrigger>
              <TabsTrigger value="sell">I Want To Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <div className="py-10">
                <h3 className="text-xl font-semibold">Create Advert</h3>
                <p>Please fill in the information to proceed to post an Ad.</p>
              </div>
              <div className="py-8 px-10">
                <div className="mx-auto py-8 px-10 bg-secondary rounded-lg shadow-xl">
                  <form
                    className="flex flex-col gap-10"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="w-full flex flex-col gap-6">
                      <h4 className="text-[#0065D0] text-lg font-medium">
                        Type And Price
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* asset */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="asset" className="font-medium">
                            Asset
                          </Label>
                          <Select
                            onValueChange={(value) => {
                              setValue("token", value);
                            }}
                          >
                            <SelectTrigger id="asset">
                              <SelectValue placeholder="Assets" />
                            </SelectTrigger>
                            <SelectContent>
                              {supportedP2PTokens?.map((token) => (
                                <SelectItem key={token.id} value={token.symbol}>
                                  {token.symbol}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {/* fiat */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="fiat" className="font-medium">
                            Fiat
                          </Label>
                          <Select
                            onValueChange={(value) => {
                              setValue(
                                "currency",
                                value as SupportedCurrencies
                              );
                            }}
                          >
                            <SelectTrigger id="fiat" defaultValue={"GHS"}>
                              <SelectValue placeholder="Fiat" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.values(SupportedCurrencies).map(
                                (currency) => (
                                  <SelectItem key={currency} value={currency}>
                                    {currency}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                        {/* price */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="price" className="font-medium">
                            My Price
                          </Label>
                          <Input
                            id="price"
                            type="number"
                            placeholder="Price"
                            {...register("rate", {
                              valueAsNumber: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="w-full flex flex-col gap-6">
                      <h4 className="text-[#0065D0] text-lg font-medium">
                        Amount and Method
                      </h4>
                      <div className="flex flex-col gap-5">
                        {/* Order Limit */}
                        <div className="flex flex-col gap-3">
                          <h4 className="text-lg font-medium">Order Limit</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2.5">
                              <Label htmlFor="min" className="font-medium">
                                Min
                              </Label>
                              <Input
                                type="number"
                                id="min"
                                {...register("minAmount", {
                                  valueAsNumber: true,
                                })}
                                placeholder="Min"
                              />
                            </div>
                            <div className="flex flex-col gap-2.5">
                              <Label htmlFor="max" className="font-medium">
                                Max
                              </Label>
                              <Input
                                type="number"
                                id="max"
                                {...register("maxAmount", {
                                  valueAsNumber: true,
                                })}
                                placeholder="Max"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Payment Method */}
                        <div className="flex flex-col gap-5">
                          <h4 className="text-lg font-medium">
                            Payment Method
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-2.5">
                              <Label htmlFor="method" className="font-medium">
                                Method
                              </Label>
                              <Select
                                defaultValue={SupportedMethods.momo}
                                onValueChange={(value) => {
                                  setValue(
                                    "paymentMethod",
                                    value as SupportedMethods
                                  );
                                }}
                              >
                                <SelectTrigger id="method">
                                  <SelectValue placeholder="Method" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.values(SupportedMethods).map(
                                    (method) => (
                                      <SelectItem key={method} value={method}>
                                        {method}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className="bg-slate-700" />
                    {/* terms */}
                    <div className="flex flex-col gap-2.5">
                      <Label htmlFor="terms" className="font-medium">
                        Terms (Optional)
                      </Label>
                      <Textarea
                        id="terms"
                        {...register("terms")}
                        placeholder="Terms"
                      />
                    </div>
                    <div className="flex flex-row justify-end">
                      <Button text="Post Ad" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sell">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAdPage;
