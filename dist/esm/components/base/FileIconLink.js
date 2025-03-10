import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import classNames from 'classnames/dedupe';
import Icon from './Icon';
const FileIconLink = ({ type, url, title, }) => {
    return (_jsx("div", { className: 'flex', children: _jsx(Link, { href: url || '/#', target: url ? '_blank' : undefined, className: classNames('cursor-pointer', {
                'pointer-events-none opacity-50': !url,
            }), children: _jsxs("div", { className: 'flex flex-col items-center justify-center space-y-1', children: [_jsx(Icon, { name: type }), _jsx("div", { className: 'font-thin uppercase text-xs', children: title })] }) }) }));
};
export default FileIconLink;
