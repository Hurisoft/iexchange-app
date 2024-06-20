"use client";

import React, { useState } from "react";
import DataGrid from "./DataGrid";
import supportedTokens from "@/common/data/tokens.json";
import SelectInput from "./SelectInput";
import { Menu } from "@/assets/index";
import Image from "next/image";
import { Button, CombinedInputSelect } from "./index";
import { formatEther } from "viem";

// hooks
import { useOffers } from "@/common/hooks/queries";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const columns = [
  {
    name: "Advertisement",
    selector: (row: any) => (
      <div>
        <p>{row.id}</p>
      </div>
    ),
  },
  {
    name: "Price",
    selector: (row: any) => (
      <div>
        <p>
          {row.rate} {row.token.symbol}
        </p>
      </div>
    ),
  },
  {
    name: "Available Funds",
    selector: (row: any) => (
      <div>
        <p>
          <b>min:</b> {formatEther(row.minOrder)}
        </p>
        <p>
          <b>max:</b> {formatEther(row.maxOrder)}
        </p>
      </div>
    ),
  },
  {
    name: "Payment Method",
    selector: (row: any) => (
      <div>
        <p>{row.paymentMethod.method}</p>
      </div>
    ),
  },
  {
    name: "Action",
    selector: (row: any) => (
      <div style={{ textAlign: "right", width: "100%" }}>
        <Button text="Edit" />
      </div>
    ),
    style: {
      width: "100%",
      textAlign: "right",
    },
  },
];

const data = [
  {
    firstName: "Tester",
    self: "Description adfkdkdf dfd dfdfd",
    gender: "Test gender",
  },
  {
    firstName: "Tester",
    self: "Description adfkdkdf dfd dfdfd",
    gender: "Test gender",
  },
];

const P2PMarket = ({ styles }: { styles?: any }) => {
  const [activeTab, setActiveTab] = useState("sell");
  const [activeToken, setActiveToken] = useState("USDT");

  // hooks
  const { data: offers } = useOffers({
    first: 10,
    skip: 0,
  });

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="relative w-full h-auto bg-[#14161B] text-white rounded-lg p-6 px-0 flex flex-col justify-center items-start"
      style={styles}
    >
      <h1 className=" py-8">iExchange P2P Market</h1>
      <div className="w-full flex flex-row justify-between items-center mb-4">
        <div className="flex flex-row justify-center items-center">
          <div className="flex p-1 bg-[#1D2027] border border-[#C3D5F173] rounded-lg mr-4">
            <div
              className={`cursor-pointer px-6 py-1 rounded-tl-lg rounded-bl-lg ${
                activeTab === "sell"
                  ? "bg-[#1D2027] "
                  : "bg-[#2A2D34] text-gray-500"
              }`}
              onClick={() => handleTabClick("sell")}
            >
              Sell
            </div>
            <div
              className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${
                activeTab === "buy"
                  ? "bg-[#1D2027] "
                  : "bg-[#2A2D34] text-gray-500"
              }`}
              onClick={() => handleTabClick("buy")}
            >
              Buy
            </div>
          </div>
          {supportedTokens.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer px-4 py-1 rounded-tl-lg rounded-bl-lg text-sm ${
                activeToken === item.name ? " text-[#FFB323]" : " "
              }`}
              onClick={() => setActiveToken(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mb-4">
        <div>
          <CombinedInputSelect
            placeholder="Enter Amount"
            options={options}
            icon={undefined}
            inputValue={""}
            onInputChange={() => {}}
            onSelectChange={() => {}}
          />
        </div>
        <div className="flex flex-row justify-start items-center space-x-3">
          <SelectInput options={[]} value={""} onChange={() => {}} />
          <SelectInput options={[]} value={""} onChange={() => {}} />
          <button className="h-full rounded-md border border-[#C3D5F173] shadow-sm px-4 py-4 bg-transparent mt-2">
            <Image src={Menu} alt="menu" height={16} width={16} />
          </button>
        </div>
      </div>
      {activeTab === "sell" && (
        <div className="w-full">
          {
            //@ts-ignore
            <DataGrid data={offers} columns={columns} />
          }
        </div>
      )}
      {activeTab === "buy" && (
        <div className="w-full">
          {
            //@ts-ignore
            <DataGrid data={offers} columns={columns} />
          }
        </div>
      )}
    </div>
  );
};

export default P2PMarket;
