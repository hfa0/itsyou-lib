import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Icon from './Icon';
function InfoTooltip({ children, size }) {
    return (_jsx("div", { className: "flex", children: _jsxs(Popover, { children: [_jsx(PopoverButton, { className: "block focus:outline-none text-gray-400 data-[active]:text-gray-300", children: _jsx(Icon, { size: size, name: 'Info', className: '' }) }), _jsx(PopoverPanel, { transition: true, anchor: "top", className: "transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0", children: _jsx("div", { className: "bg-white min-w-52 min-h-60 p-4 border shadow-lg rounded-lg font-medium text-gray-600", children: children }) })] }) }));
}
export default InfoTooltip;
