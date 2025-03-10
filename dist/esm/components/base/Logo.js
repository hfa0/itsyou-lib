import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from "../../assets/logos/logo.png";
const Logo = ({ size, href }) => {
    return (_jsx(Link, { href: href || '/', className: "shrink-0", children: _jsx(Image, { width: size || 50, height: size || 50, src: LogoImg, alt: 'its you model agentur agency hostess' }) }));
};
export default Logo;
