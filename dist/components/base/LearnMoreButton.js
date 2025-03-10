import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import Icon from './Icon';
function LearnMoreButton({ href }) {
    return (_jsx(Link, { href: href, className: 'text-primary font-medium hover:text-gray-400', children: _jsxs("span", { className: 'inline-flex gap-x-1.5 items-center pt-4', children: ["Mehr erfahren ", _jsx(Icon, { size: 18, name: 'ArrowRight' })] }) }));
}
export default LearnMoreButton;
