"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_datetime_1 = __importDefault(require("react-datetime"));
const Input_1 = __importDefault(require("./Input"));
const DatePicker = ({ label, date, className, onChange, error, }) => {
    const [startDate, setStartDate] = (0, react_1.useState)(date || new Date());
    (0, react_1.useEffect)(() => {
        setStartDate(date);
    }, [date]);
    const handleChange = (date) => {
        setStartDate(new Date(date));
        onChange?.(new Date(date));
    };
    return ((0, jsx_runtime_1.jsx)(react_datetime_1.default, { renderInput: (props) => ((0, jsx_runtime_1.jsx)(Input_1.default, { ...props, error: error, label: label, className: className, icon: 'Calendar' })), initialValue: startDate, onChange: handleChange }));
};
exports.default = DatePicker;
