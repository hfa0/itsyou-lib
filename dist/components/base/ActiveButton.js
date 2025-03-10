import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames/dedupe';
import Button from './Button';
const ActiveButton = ({ children, active, wrapperClassName, className, ...props }) => {
    return (_jsx(Button, { ...props, styleType: 'light', wrapperClassName: wrapperClassName, className: classNames('font-semibold hover:bg-white hover:border-gray-700', active ? '!text-gray-700 border-gray-700' : 'text-gray-400', className), children: children }));
};
export default ActiveButton;
