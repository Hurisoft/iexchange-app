"use client";

// react
import { ReactNode, useState } from "react";
// next
import Image from "next/image";
import { usePathname } from "next/navigation";
// imports
import { toast } from "sonner";
import {
  useAccount,
  useWriteContract,
  useReadContracts,
  useWaitForTransactionReceipt,
} from "wagmi";

// abi
import { abi as usdtAbi } from "@/common/abis/CediH.json";
import { abi as p2pAbi } from "@/common/abis/OptimisticP2P.json";

// p2p area components
import StakedSuccessModal from "./p2p-area/staked-success-modal";
import MerchantStakeModal from "./p2p-area/merchant-stake-modal";
import BecomeMerchantModal from "./p2p-area/become-merchant-modal";
import VerifyIdentityModal from "./p2p-area/verify-your-identity-modal";
// components
import { Button, MenuItem } from "../components/index";
import Footer from "../components/Footer";
import NavLink from "../components/NavLink";

// hooks
import { useStoreAccount } from "@/common/hooks/api";

// assets
import { Logo } from "@/assets/index";

// constants
const items = [
  { label: "Help Center", href: "/item1" },
  { label: "Item 2", href: "/item2" },
  { label: "Item 3", href: "/item3" },
];

// types
import type { FormValues as MerchantStakeFormValues } from "./p2p-area/merchant-stake-modal/form-schema";
import type { FormValues as BecomeMerchantFormValues } from "./p2p-area/become-merchant-modal/form-schema";
import KycSuccessModal from "./p2p-area/kyc-success-modal";

const P2PLayout = ({ children }: { children: ReactNode }) => {
  // state
  const [options, setOptions] = useState([
    "iExchange P2P Market",
    "MyAdds",
    "Appealed Orders",
  ]);
  const [activeSubMenu, setActiveSubMenu] = useState("iExchange P2P Market");
  const [merchantKycOpen, setMerchantKycOpen] = useState(false);
  const [stakedSuccessOpen, setStakedSuccessOpen] = useState(false);
  const [merchantStakeOpen, setMerchantStakeOpen] = useState(false);
  const [becomeMerchantOpen, setBecomeMerchantOpen] = useState(false);
  const [kycSuccessOpen, setkycSuccessOpen] = useState(false);

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

  const handleFinishedKyc = () => {
    setkycSuccessOpen(true);
  };

  return (
    <>
      <div className="w-full relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col">
        <div className="w-full flex flex-col border-b border-[#C3D5F126] pb-0 bg-[#181A20F2] text-white fixed top-0 left-0 z-50">
          <div className="w-full p-6 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-6">
              <Image src={Logo} alt="Logo" width={150} height={150} />
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
          <div className="px-6">
            <div className="flex flex-row justify-between items-center space-x-10">
              <div className="flex flex-row space-x-4">
                {options.map((option, i) => (
                  <span
                    onClick={() => setActiveSubMenu(option)}
                    key={i}
                    className={`px-4 py-6 pt-0 pl-0 text-sm font-medium cursor-pointer ${
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
        <div className="min-h-screen pt-40 space-y-10 px-6">{children}</div>
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
      <KycSuccessModal
        open={kycSuccessOpen}
        // open={true}
        setOpen={setkycSuccessOpen}
        onProceed={() => {
          window.open("p2p/create-ad", "_self");
        }}
      />
      <VerifyIdentityModal
        open={merchantKycOpen}
        setOpen={setMerchantKycOpen}
        onFinished={handleFinishedKyc}
      />
    </>
  );
};

export default P2PLayout;
