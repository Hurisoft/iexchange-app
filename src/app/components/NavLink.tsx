import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    href: string
}

const NavLink: FC<Props> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
            {children}
        </Link>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NavLink;
