"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
import { usePathname } from "next/navigation";
// imports
import { toast } from "sonner";
import { useAccount, useWriteContract, useReadContracts } from "wagmi";

// abi
import { abi as usdtAbi } from "@/common/abis/CediH.json";
import { abi as p2pAbi } from "@/common/abis/OptimisticP2P.json";

// p2p area components
import StakedSuccessModal from "./p2p-area/staked-success-modal";
import MerchantStakeModal from "./p2p-area/merchant-stake-modal";
import BecomeMerchantModal from "./p2p-area/become-merchant-modal";
import VerifyIdentityModal from "./p2p-area/verify-your-identity-modal";
// components
import {
  Button,
  IExchangeBanner,
  MenuItem,
  P2PMarket,
} from "../components/index";
import Footer from "../components/Footer";
import NavLink from "../components/NavLink";

// hooks
import { useStoreAccount } from "@/common/hooks/api";

// assets
import { ToDo } from "@/assets/index";

// constants
const items = [
  { label: "Help Center", href: "/item1" },
  { label: "Item 2", href: "/item2" },
  { label: "Item 3", href: "/item3" },
];

// types
import type { FormValues as MerchantStakeFormValues } from "./p2p-area/merchant-stake-modal/form-schema";
import type { FormValues as BecomeMerchantFormValues } from "./p2p-area/become-merchant-modal/form-schema";

const P2PPage = () => {
  // hooks
  const pathname = usePathname();

  // state
  const [options, setOptions] = useState([
    "iExchange P2P Market",
    "MyAdds",
    "Appealed Orders",
  ]);
  const [activeSubMenu, setActiveSubMenu] = useState("iExchange P2P Market");
  const [activeTab, setActiveTab] = useState("trade");
  const [merchantKycOpen, setMerchantKycOpen] = useState(false);
  const [stakedSuccessOpen, setStakedSuccessOpen] = useState(false);
  const [merchantStakeOpen, setMerchantStakeOpen] = useState(false);
  const [becomeMerchantOpen, setBecomeMerchantOpen] = useState(false);

  // hooks
  const { address, isConnected } = useAccount();
  const { isPending: storingAccount, mutateAsync: storeAccount } =
    useStoreAccount();

  // wagmi hooks
  const { data: contractData, isLoading: loadingContractData } =
    useReadContracts({
      contracts: [
        {
          abi: p2pAbi,
          address: process.env.P2P_CONTRACT_ADDRESS as `0x${string}`,
          functionName: "merchantStakeAmount",
        },
        {
          abi: p2pAbi,
          address: process.env.P2P_CONTRACT_ADDRESS as `0x${string}`,
          functionName: "usdtAddress",
        },
      ],
    });
  const { writeContractAsync } = useWriteContract();

  // derived contract data
  const [merchantStakeAmount, usdtAddress] = contractData || [null, null];

  // handlers
  const handleOpenBecomeMerchantModal = () => {
    setBecomeMerchantOpen(true);
  };

  const handleBecomeMerchantProceed = async (
    data: BecomeMerchantFormValues
  ) => {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet to proceed");
      return;
    }

    try {
      // store the account data on firebase
      await storeAccount({
        name: data.fullName,
        number: data.phone,
        address: address,
      });

      // open the staking modal
      // close the become merchant modal
      setBecomeMerchantOpen(false);
      setMerchantStakeOpen(true);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred, please try again");
    }
  };

  const handleMerchantStakeProceed = async (data: MerchantStakeFormValues) => {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet to proceed");
      return;
    }

    if (usdtAddress?.status === "failure") {
      toast.error(
        "Could not fetch the merchant stake amount, please try again"
      );
      return;
    }

    try {
      // approve the p2p contract to spend the usdt token
      await writeContractAsync({
        abi: usdtAbi,
        address: usdtAddress!.result as `0x${string}`,
        functionName: "approve",
        args: [
          process.env.P2P_CONTRACT_ADDRESS as `0x${string}`,
          merchantStakeAmount!.result,
        ],
      });

      // register the merchant on the p2p contract
      await writeContractAsync({
        abi: p2pAbi,
        address: process.env.P2P_CONTRACT_ADDRESS as `0x${string}`,
        functionName: "registerMerchant",
      });

      // close the staking modal
      setMerchantStakeOpen(false);
      // open the staked success modal
      setStakedSuccessOpen(true);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred, please try again");
    }
  };

  return (
    <>
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
              <Button
                text="Become a Merchant"
                onClick={handleOpenBecomeMerchantModal}
              />
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center space-x-10">
              <div className="flex flex-row space-x-4">
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
        <div className="min-h-screen pt-40 container mx-auto space-y-10">
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
                  onClick={() => setActiveTab("trade")}
                >
                  Trade
                </div>
                <div
                  className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${
                    activeTab === "merchant"
                      ? "bg-[#1D2027] text-white "
                      : "bg-[#2A2D34] text-gray-500"
                  }`}
                  onClick={() => setActiveTab("merchant")}
                >
                  Merchant
                </div>
                <div
                  className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${
                    activeTab === "settler"
                      ? "bg-[#1D2027] text-white "
                      : "bg-[#2A2D34] text-gray-500"
                  }`}
                  onClick={() => setActiveTab("settler")}
                >
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
        </div>
        <Footer />
      </div>
      <BecomeMerchantModal
        open={becomeMerchantOpen}
        setOpen={setBecomeMerchantOpen}
        isLoading={storingAccount}
        onProceed={handleBecomeMerchantProceed}
      />
      <MerchantStakeModal
        open={merchantStakeOpen}
        setOpen={setMerchantStakeOpen}
        onStake={handleMerchantStakeProceed}
      />
      <StakedSuccessModal
        open={stakedSuccessOpen}
        setOpen={setStakedSuccessOpen}
        onProceed={() => setMerchantKycOpen(true)}
      />
      <VerifyIdentityModal
        open={merchantKycOpen}
        setOpen={setMerchantKycOpen}
      />
    </>
  );
};

export default P2PPage;
