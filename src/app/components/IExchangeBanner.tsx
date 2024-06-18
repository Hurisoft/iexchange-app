import { Logo, GoldCoins } from '@/assets/index'
import Image from 'next/image'

const IExchangeBanner = ({className}:{className?:string}) => {
    return (
            <div className={`relative pl-6 ${className}`}>
                <div className='h-full flex flex-col justify-center'>
                    <div className='flex flex-col items-start'>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        <div className='ml-2'>
                            <h1 className='text-white text-xl'>Smart Contract, Trade Immediately with return.</h1>
                            <p className='text-white text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <Image src={GoldCoins} alt="bg" height={150} className='absolute right-0 top-0' />
            </div>
    )
}

export default IExchangeBanner