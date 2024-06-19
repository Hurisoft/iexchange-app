"use client";

// react
import { useState } from "react";

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
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// constants
const items = [
  { label: "Help Center", href: "/item1" },
  { label: "Item 2", href: "/item2" },
  { label: "Item 3", href: "/item3" },
];

const CreateAdPage = () => {
  // state
  const [options, setOptions] = useState([
    "iExchange P2P Market",
    "MyAdds",
    "Appealed Orders",
  ]);
  const [activeSubMenu, setActiveSubMenu] = useState("iExchange P2P Market");

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
          <Tabs defaultValue="buy">
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
                  <form className="flex flex-col gap-10">
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
                          <Select>
                            <SelectTrigger id="asset">
                              <SelectValue placeholder="Assets" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USDC">USDC</SelectItem>
                              <SelectItem value="USDT">USDT</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/* fiat */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="fiat" className="font-medium">
                            Fiat
                          </Label>
                          <Select>
                            <SelectTrigger id="fiat">
                              <SelectValue placeholder="Fiat" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="GHS">GHS</SelectItem>
                              <SelectItem value="USD">USD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/* price */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="price" className="font-medium">
                            My Price
                          </Label>
                          <Input type="text" id="price" placeholder="Price" />
                        </div>
                      </div>
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="w-full flex flex-col gap-6">
                      <h4 className="text-[#0065D0] text-lg font-medium">
                        Amount and Method
                      </h4>
                      <div className="flex flex-col gap-5">
                        {/* Amount */}
                        <div className="flex flex-col gap-2.5">
                          <Label htmlFor="amount" className="font-medium">
                            Asset Total Amount
                          </Label>
                          <Input type="text" id="amount" placeholder="Amount" />
                        </div>
                        {/* Order Limit */}
                        <div className="flex flex-col gap-3">
                          <h4 className="text-lg font-medium">Order Limit</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2.5">
                              <Label htmlFor="min" className="font-medium">
                                Min
                              </Label>
                              <Input type="text" id="min" placeholder="Min" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                              <Label htmlFor="max" className="font-medium">
                                Max
                              </Label>
                              <Input type="text" id="max" placeholder="Max" />
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
                              <Select>
                                <SelectTrigger id="method">
                                  <SelectValue placeholder="Method" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Mobile Money">
                                    Mobile Money
                                  </SelectItem>
                                  <SelectItem value="Bank Transfer">
                                    Bank Transfer
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex flex-col gap-2.5">
                              <Label
                                htmlFor="accountName"
                                className="font-medium"
                              >
                                Account Name
                              </Label>
                              <Input type="text" id="accountName" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                              <Label
                                htmlFor="accountNumber"
                                className="font-medium"
                              >
                                Account Number
                              </Label>
                              <Input type="text" id="accountNumber" />
                            </div>
                          </div>
                          {/* add payment button */}
                          <div className="flex flex-row justify-start">
                            <Button type="button">Add Payment Method</Button>
                          </div>
                          {/* selected methods */}
                          <div className="flex flex-row items-center gap-3">
                            <Badge>MTN Mobile Money</Badge>
                            <Badge>Telecel Cash</Badge>
                            <Badge>Bank Transfer</Badge>
                          </div>
                          {/* payment time limit */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-2.5">
                              <Label
                                htmlFor="timeLimit"
                                className="font-medium"
                              >
                                Payment Time Limit
                              </Label>
                              <Select>
                                <SelectTrigger id="timeLimit">
                                  <SelectValue placeholder="Time Limit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15">15 minutes</SelectItem>
                                  <SelectItem value="30">30 minutes</SelectItem>
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
                        Terms
                      </Label>
                      <Textarea id="terms" placeholder="Terms" />
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
