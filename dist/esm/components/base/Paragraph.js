import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames/dedupe';
function Paragraph({ children, className }) {
    return _jsx("p", { className: classNames('text-base px-3 sm:px-3.5', className), children: children });
}
export default Paragraph;
