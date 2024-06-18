'use client';

import { usePathname } from 'next/navigation';
import Link from "node_modules/next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import { Button, IExchangeBanner, MenuItem, P2PMarket } from "../components/index";
import NavLink from "../components/NavLink";

const items = [
  { label: 'Help Center', href: '/item1' },
  { label: 'Item 2', href: '/item2' },
  { label: 'Item 3', href: '/item3' },
];

const P2PPage = () => {
  const pathname = usePathname();
  const [options, setOptions] = useState(["iExchange P2P Market", "MyAdds", "Appealed Orders"])
  const [activeSubMenu, setActiveSubMenu ] = useState("iExchange P2P Market")
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
                  <span onClick={()=>setActiveSubMenu(option)} key={i} className={`px-4 py-6 pt-0 text-sm font-medium cursor-pointer ${activeSubMenu === option ? 'text-white border-b border-[#FFB323]' : 'text-gray-700'}`}>{option}</span>
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
        <P2PMarket styles={{background:"transparent", color:"#5B5E5F"}} />

        <IExchangeBanner  className="justify-center bg-[#1E1F204D] border border-[#C3D5F140] pl-0 rounded-lg h-[150px]" />
      </div>
      <Footer styles={{ background: "#F2F4F773", color: "#5B5E5F" }} />
    </div>
  );
};

export default P2PPage;
