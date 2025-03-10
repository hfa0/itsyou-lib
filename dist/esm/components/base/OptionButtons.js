import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import classNames from 'classnames/dedupe';
const OptionButtons = ({ items, className }) => {
    const [selected, setSelected] = useState(0);
    return (_jsx("div", { className: classNames(className, 'flex h-12 border-2 rounded-lg divide-x-2 shadow-sm'), children: items.map((item, i) => (_jsx("div", { className: classNames(selected === i ? 'bg-gray-100' : 'bg-white', 'w-28 whitespace-nowrap flex items-center justify-center first:rounded-l-lg last:rounded-r-lg font-semibold cursor-pointer'), onClick: () => setSelected(i), children: item.label }, item.id))) }));
};
export default OptionButtons;
