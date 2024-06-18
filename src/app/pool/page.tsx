'use client';

import { AngleDown, Folder, Plus } from "@/assets/index";
import { Button, Footer, HorizontalNav } from "../components/index";
import Image from 'next/image'

const Pool: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col'>
      <HorizontalNav />
      <div className="pt-36 min-h-screen w-[800px] mx-auto space-y-14">
        <div className="flex flex-row justify-between items-center">
          <span className="text-white text-2xl">Positions</span>
          <div className="flex flex-row items-center space-x-3">
            <Button text="Pool Position" icon={Plus} contentClassName="flex-row-reverse" />
            <Button text="More" icon={AngleDown} contentClassName="" className="border" styles={{ background: "transparent" }} />
          </div>
        </div>
        <div className="border border-[#C3D5F126] rounded-lg flex justify-center items-center min-h-[350px]">
          <div className="flex flex-col justify-center items-center p-6 space-y-6">
            <Image src={Folder} alt="folder" />
            <p className="text-white">Your active Pool positions will appear here.</p>
            <Button text="Connect Wallet" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pool;
