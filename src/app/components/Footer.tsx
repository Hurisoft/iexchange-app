import { Logo } from '@/assets/index';
import Image from 'next/image'

const Footer = ({styles}:{styles?:any}) => {
  return (
    <footer className="bg-[#202229] text-white py-6 pb-0 w-full" style={styles}>
      <div className='container mx-auto'>
        <div className=" px-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <Image src={Logo} alt="logo" />
              <div className='ml-4'>
                <h4 className="text-sm font-semibold mb-4">About Us</h4>
                <ul>
                  <li className="mb-2"><a href="#" className="text-sm">Link 1</a></li>
                  <li className="mb-2"><a href="#" className="text-sm">Link 2</a></li>
                  <li className="mb-2"><a href="#" className="text-sm">Link 3</a></li>
                  <li className="mb-2"><a href="#" className="text-sm">Link 4</a></li>
                </ul>
              </div>
            </div>
            <div className='mt-4'>
              <h4 className="text-sm font-semibold mb-4">Column 2</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 3</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 4</a></li>
              </ul>
            </div>
            <div className='mt-4'>
              <h4 className="text-sm font-semibold mb-4">Column 3</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 3</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 4</a></li>
              </ul>
            </div>
            <div className='mt-4'>
              <h4 className="text-sm font-semibold mb-4">Column 4</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 3</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 4</a></li>
              </ul>
            </div>
            <div className='mt-4'>
              <h4 className="text-sm font-semibold mb-4">Column 5</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-sm">Link 1</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 2</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 3</a></li>
                <li className="mb-2"><a href="#" className="text-sm">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center border-t border-[#C3D5F124] py-4 mt-8 text-[#EAECEF]'>2024 HuriSoft Ghana.co All rights reserved. </div>
      </div>
    </footer>
  );
};

export default Footer;
