import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
import Icon from './Icon';
const ButtonIcon = ({ icon, onClick, href }) => {
    const I = (_jsx(Icon, { size: 28, name: icon, className: 'cursor-pointer text-gray-700 border p-1.5 rounded shadow-sm hover:bg-gray-50/70', onClick: onClick }));
    if (href)
        return _jsx(Link, { href: href, children: I });
    return I;
};
export default ButtonIcon;
