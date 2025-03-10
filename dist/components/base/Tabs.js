import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tab } from '@headlessui/react';
import classNames from 'classnames/dedupe';
export default function Tabs({ items, listClassName, buttonClassName, listWrapperClassName, selectedClassName, wrapperClassName, }) {
    return (_jsxs(Tab.Group, { className: classNames(wrapperClassName, 'flex flex-col items-center space-y-6'), children: [_jsx("div", { className: classNames(listWrapperClassName, 'w-full flex justify-center'), children: _jsx(Tab.List, { className: classNames(listClassName, 'flex rounded-xl bg-gray-100 p-1 w-full max-w-md overflow-x-auto no-scrollbar'), children: items.map((item) => (_jsx(Tab, { className: ({ selected }) => classNames(buttonClassName, 'w-full rounded-lg py-2.5 text-sm font-medium leading-5', selected
                            ? ['bg-white text-gray-900 shadow', selectedClassName]
                            : 'hover:bg-white/[0.12]'), children: item.name }, item.name))) }) }), _jsx(Tab.Panels, { className: "w-full", children: items.map((item, idx) => (_jsx(Tab.Panel, { children: item.panel }, idx))) })] }));
}
