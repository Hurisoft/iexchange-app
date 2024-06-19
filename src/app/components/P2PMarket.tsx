'use client';

import React, { useState } from 'react';
import DataGrid from './DataGrid';
import supportedTokens from '@/common/data/tokens.json'
import SelectInput from './SelectInput';
import { Menu } from '@/assets/index';
import Image from 'next/image'
import { CombinedInputSelect } from './index';

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

const P2PMarket = ({ styles }: { styles?: any }) => {
    const [activeTab, setActiveTab] = useState('sell');
    const [activeToken, setActiveToken] = useState('USDT');
    const data: never[] = []

    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const columns = [
        {
            name: 'ID',
            selector: (row: { id: any; }) => row.id,
            sortable: true,
        },
        {
            name: 'Platform',
            selector: (row: { platform: any; }) => row.platform,
            sortable: true,
            cell: (row: { icon: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; platform: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => <div className="flex items-center"><span className="mr-2">{row.icon}</span>{row.platform}</div>,
        },
    ];
    return (
        <div className='relative w-full h-auto bg-[#14161B] text-white rounded-lg p-6 px-0 flex flex-col justify-center items-start' style={styles}>
            <h1 className=' py-8'>iExchange P2P Market</h1>
            <div className='w-full flex flex-row justify-between items-center mb-4'>
                <div className='flex flex-row justify-center items-center'>
                    <div className='flex p-1 bg-[#1D2027] border border-[#C3D5F173] rounded-lg mr-4'>
                        <div
                            className={`cursor-pointer px-6 py-1 rounded-tl-lg rounded-bl-lg ${activeTab === 'sell' ? 'bg-[#1D2027] ' : 'bg-[#2A2D34] text-gray-500'
                                }`}
                            onClick={() => handleTabClick('sell')}
                        >
                            Sell
                        </div>
                        <div
                            className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${activeTab === 'buy' ? 'bg-[#1D2027] ' : 'bg-[#2A2D34] text-gray-500'
                                }`}
                            onClick={() => handleTabClick('buy')}
                        >
                            Buy
                        </div>
                    </div>
                    {
                        supportedTokens.map((item, i) => (
                            <div
                                key={i}
                                className={`cursor-pointer px-4 py-1 rounded-tl-lg rounded-bl-lg text-sm ${activeToken === item.name ? ' text-[#FFB323]' : ' '
                                    }`}
                                onClick={() => setActiveToken(item.name)}
                            >
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex flex-row justify-between items-center mb-4'>
                <div>
                    <CombinedInputSelect placeholder='Enter Amount' options={options} icon={undefined} inputValue={''} onInputChange={() => { }} onSelectChange={() => { }} />
                </div>
                <div className='flex flex-row justify-start items-center space-x-3'>
                    <SelectInput options={[]} value={''} onChange={()=>{}} />
                    <SelectInput options={[]} value={''} onChange={()=>{}} />
                    <button className='h-full rounded-md border border-[#C3D5F173] shadow-sm px-4 py-4 bg-transparent mt-2'>
                        <Image
                            src={Menu}
                            alt="menu"
                            height={16}
                            width={16}
                        />
                    </button>
                </div>
            </div>
            {activeTab === 'sell' && (
                <div className='w-full'>
                    <DataGrid data={data} columns={columns} />
                </div>
            )}
            {activeTab === 'buy' && (
                <div className='w-full'>
                    <DataGrid data={data} columns={columns} />
                </div>
            )}
        </div>
    );
};

export default P2PMarket;
