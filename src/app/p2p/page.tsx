"use client";

// next
import Image from "next/image";
import { useState } from "react";

// components
import {
  IExchangeBanner,
  P2PMarket,
} from "../components/index";

import P2PLayout from "./P2PLayout";

// assets
import { ToDo } from "@/assets/index";

const P2PPage = () => {
  const [activeTab, setActiveTab] = useState("trade");

  return (
    <P2PLayout>
          <P2PMarket styles={{ background: "transparent", color: "#5B5E5F" }} />
          <IExchangeBanner className="justify-center bg-[#1E1F204D] border border-[#C3D5F140] pl-0 rounded-lg h-[150px]" />
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="bg-[#00142A] p-2 rounded-lg">
                <p className="text-white text-sm">CryptoCurriencies Prices</p>
              </div>
              <div className="flex p-1 bg-[#1D2027] border border-[#C3D5F173] rounded-lg mr-4">
                <div
                  className={`cursor-pointer px-6 py-1 rounded-tl-lg rounded-bl-lg ${
                    activeTab === "trade"
                      ? "bg-[#1D2027] text-white "
                      : "bg-[#2A2D34] text-gray-500"
                  }`}
                  onClick={() => setActiveTab("trade")}>
                  Trade
                </div>
                <div
                  className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${
                    activeTab === "merchant"
                      ? "bg-[#1D2027] text-white "
                      : "bg-[#2A2D34] text-gray-500"
                  }`}
                  onClick={() => setActiveTab("merchant")}>
                  Merchant
                </div>
                <div
                  className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${
                    activeTab === "settler"
                      ? "bg-[#1D2027] text-white "
                      : "bg-[#2A2D34] text-gray-500"
                  }`}
                  onClick={() => setActiveTab("settler")}>
                  Settler
                </div>
              </div>
            </div>
            <div className="py-6 w-full grid grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0">
                <Image src={ToDo} alt="todo" />
                <div>
                  <h1 className="font-bold text-black">
                    1. Place an Order or Receive an Order
                  </h1>
                  <p className="flex-grow-0 text-black">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusan tium dolorem quelau dantium, totam rem
                    aperiam, eaque ipsa quae a b illo{" "}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0">
                <Image src={ToDo} alt="todo" />
                <div>
                  <h1 className="font-bold text-black">
                    1. Place an Order or Receive an Order
                  </h1>
                  <p className="flex-grow-0 text-black">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusan tium dolorem quelau dantium, totam rem
                    aperiam, eaque ipsa quae a b illo{" "}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0">
                <Image src={ToDo} alt="todo" />
                <div>
                  <h1 className="font-bold text-black">
                    1. Place an Order or Receive an Order
                  </h1>
                  <p className="flex-grow-0 text-black">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusan tium dolorem quelau dantium, totam rem
                    aperiam, eaque ipsa quae a b illo{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
    </P2PLayout>
  );
};

export default P2PPage;
