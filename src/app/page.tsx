'use client';

import { GoldCoins, Logo } from '@/assets/index';
import React from 'react';
import Dex from './components/Dex';
import HorizontalNav from './components/HorizontalNav';
import Image from 'next/image';
import Faq from './components/Faq';
import Questions from './data/questions.json';
import Footer from './components/Footer';
import { Earn, IExchangeBanner, P2PMarket } from './components/index';

const Page: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] flex flex-col'>
      <HorizontalNav />
      <div className='relative flex flex-col justify-center items-center py-28 space-y-12'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-white'>
            <span>Seamless </span>
            <span className='text-[#1ABCFE]'>Swaps, </span>
          </p>
          <p className='text-4xl text-white'>
            <span className='text-[#FFB224]'>Zero </span>
            <span>Hassle.</span>
          </p>
        </div>
        <Dex />
      </div>
      <div className='w-[90%] absolute top-[720px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center bg-[#141618] border border-[#C3D5F140] pl-0 rounded-lg h-[150px]'>
        <IExchangeBanner />
      </div>
      <div className='w-full bg-[#14161B] h-auto mt-0 pb-20'>
        <div className="mx-20">
          <div className='pt-20'>
            <div className='w-full'>
              <P2PMarket styles={{color:"white"}} />
            </div>
            <Earn />
            <div className='mt-10'>
              <h1 className='text-white mb-8'>iExchange FAQ’s</h1>
              <Faq data={Questions} />
            </div>
            <div className='bg-[#141618] border border-[#C3D5F140] pl-0 rounded-lg w-full h-[150px] mt-10'>
              <div className="relative h-full pl-6">
                <div className='h-full flex flex-col justify-center'>
                  <div className='flex flex-col items-start'>
                    <Image
                      src={Logo}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <div className='ml-2'>
                      <h1 className='text-white text-xl'>Follow Us on our Socials!!!</h1>
                      <p className='text-white text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                <Image src={GoldCoins} alt="bg" height={150} className='absolute right-0 top-0' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
