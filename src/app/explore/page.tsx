"use client";

import { ChangeEvent } from "react";
import {
  DataGrid,
  Footer,
  HorizontalNav,
  IExchangeBanner,
  SelectInput,
} from "../components/index";

const ExplorePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col">
      <HorizontalNav />
      <div className="pt-36 min-h-screen container mx-auto space-y-28">
        <IExchangeBanner className="justify-center bg-[#141618] border border-[#C3D5F140] pl-0 rounded-lg h-[150px]" />

        <div className="flex flex-col items-start justify-start space-y-6">
          <div className="bg-[#00142A] p-2 rounded-lg">
            <p className="text-white text-sm">CryptoCurriencies Prices</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-white text-2xl">
              Swapping made <span className="text-[#1ABCFE]">Easy</span>. Access
              thousands of Tokens on 8+{" "}
              <span className="text-[#FFB323]">Chains</span>
            </p>
            <SelectInput
              options={[]}
              value={""}
              onChange={function (event: ChangeEvent<HTMLSelectElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <DataGrid data={[]} columns={[]} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExplorePage;
