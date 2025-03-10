import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/dedupe';
import Icon from './Icon';
const InputWrapper = ({ label, children, className, error, hideError, }) => {
    return (_jsxs("div", { className: classNames('space-y-2', className), children: [label && _jsx("label", { className: 'text-gray-500 font-light', children: label }), _jsxs("div", { className: 'space-y-1', children: [children, !hideError && (_jsxs("div", { className: classNames('font-medium text-red-600 flex space-x-1 items-center invisible h-4', {
                            '!visible': error,
                        }), children: [_jsx(Icon, { size: 16, name: 'Info' }), _jsx("span", { children: error })] }))] })] }));
};
export default InputWrapper;
