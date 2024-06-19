import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { AngleDown } from '@/assets/index';

interface Option {
    label: string;
    href: string;
}

interface MenuItemProps {
    options?: Option[];
    showDropdown: boolean;
    link?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ options, showDropdown, link }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!showDropdown) {
        return <Link href={link as string}>{link}</Link>;
    }

    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="btn">
                <div className="flex flex-row item-center space-x-6">
                    <span>{link}</span>
                    <Image src={AngleDown} alt="drop" />
                </div>
            </button>
            {isOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white text-black border border-gray-200 rounded shadow-lg">
                    <ul className="flex flex-col">
                        {options && options.map((option, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link href={option.href}>
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuItem;
