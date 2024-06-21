"use client";

import React, { useState } from "react";
import supportedTokens from "@/common/data/tokens.json";
import SelectInput from "../SelectInput";
import { Avatar } from "@/assets/index";
import Image from "next/image";
import { Button, CombinedInputSelect, ExpandableTable } from "../index";
import { formatEther } from "viem";

// hooks
import { useOffers } from "@/common/hooks/queries";

// components
import ExpandedRowModal from "./expanded-row-modal";
import { useRouter } from "next/navigation";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const P2PMarket = ({ styles }: { styles?: any }) => {
  const router = useRouter();
  // state
  const [activeTab, setActiveTab] = useState("sell");
  const [activeToken, setActiveToken] = useState("USDT");
  const [expandedRow, setExpandedRow] = useState<boolean>(false);

  // hooks
  const { data: offers, loading } = useOffers({
    first: 10,
    skip: 0,
  });

  // handlers
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleRowExpand = (row: any) => {};

  // columns

  const columns = [
    {
      key: "id",
      label: "ID",
      render: (row: any) => (
        <span className="text-gray-400 font-bold">{row.id}</span>
      ),
    },
    {
      key: "advertisement",
      label: "Advertisement",
      render: (row: any) => (
        <span className="text-gray-400 ">{row.advertisement}</span>
      ),
    },
    {
      key: "rate",
      label: "Price",
      render: (row: any) => <span className="text-gray-400 ">{row.rate}</span>,
    },
    {
      key: "rate",
      label: "Available Funds",
      render: (row: any) => (
        <div>
          <p className="text-gray-400">
            <span className="text-gray-400 font-bold">Min: </span>
            {row.available.minOrder}
          </p>
          <p className="text-gray-400">
            <span className="text-gray-400 font-bold">Max: </span>
            {row.available.maxOrder}
          </p>
        </div>
      ),
    },
    {
      key: "paymentMethod",
      label: "Payment method",
      render: (row: any) => (
        <span className="text-gray-400 ">{row.paymentMethod}</span>
      ),
    },
  ];

  const sellActions: any = [
    {
      label: "Sell",
      onClick: (row: any) => {
        console.log("Edit action clicked for", row);
        // Implement your edit logic here
      },
    },
  ];

  const buyActions: any = [
    {
      label: "Buy",
      onClick: (row: any) => {
        console.log("Edit action clicked for", row);
        // Implement your edit logic here
      },
    },
  ];

  const renderSellForm = (row: any, cancel: () => void) => {
    return (
      <div className="w-full rounded-lg bg-gray-200 min-h-[350px] p-6 grid grid-cols-2 gap-8">
        <div>
          <div className="flex flex-row items-center space-x-2">
            <Image
              src={Avatar}
              alt="avatar"
              className="bg-black rounded-full"
            />
            <span className="text-gray-400 text-sm">Crypto.Gh</span>
          </div>
          <div className="flex flex-row justify-between items-center mt-6 gap-8 flex-wrap">
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>30min</p>
              <p>Payment Time Frame</p>
            </div>
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>3.15 Minutes</p>
              <p>Average Payment Time</p>
            </div>
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>
                {Number(row.available.minOrder).toFixed(2)} - {Number(row.available.maxOrder).toFixed(2)}
              </p>
              <p>Available</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg text-xs mt-10 space-y-3">
            <h1 className="text-lg font-bold">Merchant Terms and Conditions</h1>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptat deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum{" "}
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-6 space-y-4 rounded-lg">
          <h1 className="text-sm font-bold">Transaction Conversion</h1>
          <div className="flex flex-col gap-4">
            <CombinedInputSelect
              placeholder="Enter Amount"
              options={options}
              icon={undefined}
              inputValue={""}
              onInputChange={() => {}}
              onSelectChange={() => {}}
            />
            <CombinedInputSelect
              placeholder="Enter Amount"
              options={options}
              icon={undefined}
              inputValue={""}
              onInputChange={() => {}}
              onSelectChange={() => {}}
            />
            <SelectInput
              options={[]}
              value={row.paymentMethod}
              onChange={() => {}}
              placeholder="Payment method"
            />
            <div className="flex flex-row gap-4">
              <Button text="Cancel" className="w-full" onClick={cancel} />
              <Button
                text="Sell"
                className="w-full bg-green-700"
                style={{ background: "green" }}
                onClick={() => router.push("/order")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderBuyForm = (row: any, cancel: () => void) => {
    return (
      <div className="w-full rounded-lg bg-gray-200 min-h-[350px] p-6 grid grid-cols-2 gap-8">
        <div>
          <div className="flex flex-row items-center space-x-2">
            <Image
              src={Avatar}
              alt="avatar"
              className="bg-black rounded-full"
            />
            <span className="text-gray-400 text-sm">Crypto.Gh</span>
          </div>
          <div className="flex flex-row justify-between items-center mt-6 gap-8 flex-wrap">
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>30min</p>
              <p>Payment Time Frame</p>
            </div>
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>30min</p>
              <p>Payment Time Frame</p>
            </div>
            <div className="p-6 bg-gray-300 rounded-lg text-xs">
              <p>30min</p>
              <p>Payment Time Frame</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg text-xs mt-10 space-y-3">
            <h1 className="text-lg font-bold">Merchant Terms and Conditions</h1>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptat deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum{" "}
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-6 space-y-4 rounded-lg">
          <h1 className="text-sm font-bold">Transaction Conversion</h1>
          <div className="flex flex-col gap-4">
            <CombinedInputSelect
              placeholder="Enter Amount"
              options={options}
              icon={undefined}
              inputValue={""}
              onInputChange={() => {}}
              onSelectChange={() => {}}
            />
            <CombinedInputSelect
              placeholder="Enter Amount"
              options={options}
              icon={undefined}
              inputValue={""}
              onInputChange={() => {}}
              onSelectChange={() => {}}
            />
            <SelectInput
              options={[]}
              value={""}
              onChange={() => {}}
              placeholder="Payment method"
            />
            <div className="flex flex-row gap-4">
              <Button text="Cancel" className="w-full" />
              <Button
                text="Buy"
                className="w-full bg-green-700"
                style={{ background: "green" }}
                onClick={() => router.push("/order")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="relative w-full h-auto bg-[#14161B] text-white rounded-lg p-6 px-0 flex flex-col justify-center items-start"
        style={styles}
      >
        {/* <h1 className=" py-8">iExchangexpandedRows && e P2P Market</h1> */}
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
        {activeTab === "sell" && (
          <ExpandableTable
            columns={columns}
            data={(offers ?? [])?.map((offer) => ({
              id: offer.id,
              advertisement: "Test",
              rate: offer.rate + " " + offer.token.symbol,
              available: {
                minOrder: formatEther(offer.minOrder),
                maxOrder: formatEther(offer.maxOrder),
              },
              paymentMethod: offer.paymentMethod.method,
            }))}
            renderExpandedRow={renderSellForm}
            actions={sellActions}
            styles={{ background: "transparent" }}
            isLoading={loading}
          />
        )}

        {activeTab === "buy" && (
          <ExpandableTable
            columns={columns}
            data={(offers ?? [])?.map((offer) => ({
              id: offer.id,
              advertisement: "Test",
              rate: offer.rate + " " + offer.token.symbol,
              available: {
                minOrder: formatEther(offer.minOrder),
                maxOrder: formatEther(offer.maxOrder),
              },
              paymentMethod: offer.paymentMethod.method,
            }))}
            renderExpandedRow={renderBuyForm}
            actions={buyActions}
            styles={{ background: "transparent" }}
            isLoading={loading}
          />
        )}
      </div>
      <ExpandedRowModal open={expandedRow} setOpen={setExpandedRow} />
    </>
  );
};

export default P2PMarket;
