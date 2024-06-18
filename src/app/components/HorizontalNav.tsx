'use client';

// next
import Image from 'next/image';
// import
import { ConnectButton } from '@rainbow-me/rainbowkit';

// components
import Button from './Button';
import NavLink from './NavLink';

// assets
import { Logo } from '@/assets/index';

// data
import routeData from '../data/routes.json';

const HorizontalNav = () => {
  return (
    <div className="h-[70px] w-full fixed top-0 left-0 right-0 z-[100] flex flex-row justify-between items-center px-6 py-2 bg-[#181A20F2]">
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={150}
      />
      <div className="flex flex-row items-center text-white">
        {routeData.map((item, i) => (
          <NavLink key={i} href={item.route}>{item.name}</NavLink>
        ))}
      </div>
      {/* <Button text="Connect Wallet" /> */}
      <ConnectButton />
    </div>
  );
}

export default HorizontalNav;
