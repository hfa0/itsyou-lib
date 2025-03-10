import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import classNames from 'classnames/dedupe';
import InputWrapper from './InputWrapper';
const MultiSelectTags = ({ tags, label }) => {
    const [state, setState] = useState({});
    return (_jsx(InputWrapper, { label: label, children: _jsx("div", { className: 'space-x-2 flex', children: tags.map((tag) => (_jsx("div", { className: classNames('border-2 border-gray-200 px-4 py-3 min-w-16 rounded-full text-gray-400 cursor-pointer font-semibold', state[tag.id] ? 'text-gray-700 border-gray-700' : ''), onClick: () => setState((s) => ({
                    ...s,
                    [tag.id]: !s[tag.id],
                })), children: tag.name }, tag.id))) }) }));
};
export default MultiSelectTags;
