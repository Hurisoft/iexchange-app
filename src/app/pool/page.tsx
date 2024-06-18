'use client';

import { ChangeEvent } from "react";
import { DataGrid, Footer, HorizontalNav, IExchangeBanner, SelectInput } from "../components/index";

const Pool: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col'>
      <HorizontalNav />
      <div className="pt-36 min-h-screen container mx-auto space-y-28">
      </div>

      <Footer />
    </div>
  );
};

export default Pool;
