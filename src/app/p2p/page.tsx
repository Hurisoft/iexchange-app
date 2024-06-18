'use client';

import { ToDo } from '@/assets/index';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Footer from "../components/Footer";
import { Button, IExchangeBanner, MenuItem, P2PMarket } from "../components/index";
import NavLink from "../components/NavLink";
import Image from 'next/image'

const items = [
  { label: 'Help Center', href: '/item1' },
  { label: 'Item 2', href: '/item2' },
  { label: 'Item 3', href: '/item3' },
];

const P2PPage = () => {
  const pathname = usePathname();
  const [options, setOptions] = useState(["iExchange P2P Market", "MyAdds", "Appealed Orders"])
  const [activeSubMenu, setActiveSubMenu] = useState("iExchange P2P Market")

  const [activeTab, setActiveTab] = useState("trade")
  return (
    <div className="w-full relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col">
      <div className="w-full flex flex-col border-b border-[#C3D5F126] pb-0 bg-[#181A20F2] text-white fixed top-0 left-0 z-50">
        <div className="w-full p-6 flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-6">
            <div className="flex flex-row items-center text-2xl">
              <span className="text-[#ffffff] font-light">Dex</span>
              <span className="text-[#1ABCFE] font-bold">Ram</span>
            </div>
            <div className='flex flex-row'>
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
              {
                options.map((option, i) => (
                  <span onClick={() => setActiveSubMenu(option)} key={i} className={`px-4 py-6 pt-0 text-sm font-medium cursor-pointer ${activeSubMenu === option ? 'text-white border-b border-[#FFB323]' : 'text-gray-700'}`}>{option}</span>
                ))
              }
            </div>
            <div className='flex flex-row items-center space-x-10'>
              <MenuItem link="Help Center" options={items} showDropdown={true} />
              <MenuItem link="Transactions" showDropdown={false} />
              <MenuItem link='Account Details' options={items} showDropdown={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen pt-40 container mx-auto space-y-10">
        <P2PMarket styles={{ background: "transparent", color: "#5B5E5F" }} />
        <IExchangeBanner className="justify-center bg-[#1E1F204D] border border-[#C3D5F140] pl-0 rounded-lg h-[150px]" />
        <div>
          <div className='flex flex-row justify-between items-center'>
            <div className="bg-[#00142A] p-2 rounded-lg">
              <p className="text-white text-sm">CryptoCurriencies Prices</p>
            </div>
            <div className='flex p-1 bg-[#1D2027] border border-[#C3D5F173] rounded-lg mr-4'>
              <div
                className={`cursor-pointer px-6 py-1 rounded-tl-lg rounded-bl-lg ${activeTab === 'trade' ? 'bg-[#1D2027] text-white ' : 'bg-[#2A2D34] text-gray-500'
                  }`}
                onClick={() => setActiveTab("trade")}
              >
                Trade
              </div>
              <div
                className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${activeTab === 'merchant' ? 'bg-[#1D2027] text-white ' : 'bg-[#2A2D34] text-gray-500'
                  }`}
                onClick={() => setActiveTab("merchant")}
              >
                Merchant
              </div>
              <div
                className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${activeTab === 'settler' ? 'bg-[#1D2027] text-white ' : 'bg-[#2A2D34] text-gray-500'
                  }`}
                onClick={() => setActiveTab("settler")}
              >
                Settler
              </div>
            </div>
          </div>
          <div className='py-6 w-full grid grid-cols-3 gap-6'>
            <div className='p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0'>
              <Image src={ToDo} alt="todo" />
              <div>
                <h1 className='font-bold text-black'>1. Place an Order or Receive an Order</h1>
                <p className='flex-grow-0'>Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusan tium dolorem quelau
                  dantium, totam rem aperiam, eaque ipsa quae
                  a  b illo </p>
              </div>
            </div>
            <div className='p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0'>
              <Image src={ToDo} alt="todo" />
              <div>
                <h1 className='font-bold text-black'>1. Place an Order or Receive an Order</h1>
                <p className='flex-grow-0'>Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusan tium dolorem quelau
                  dantium, totam rem aperiam, eaque ipsa quae
                  a  b illo </p>
              </div>
            </div>
            <div className='p-6 bg-white rounded-lg flex flex-col justify-center items-center flex-grow-0'>
              <Image src={ToDo} alt="todo" />
              <div>
                <h1 className='font-bold text-black'>1. Place an Order or Receive an Order</h1>
                <p className='flex-grow-0'>Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusan tium dolorem quelau
                  dantium, totam rem aperiam, eaque ipsa quae
                  a  b illo </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default P2PPage;
