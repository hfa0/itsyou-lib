import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Tooltip = ({ title, children, }) => (_jsxs("div", { className: 'space-y-3', children: [_jsx("div", { children: _jsx("h5", { children: title }) }), _jsx("div", { className: 'space-y-2', children: children })] }));
export default Tooltip;
