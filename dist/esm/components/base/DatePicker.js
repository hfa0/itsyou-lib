import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Datetime from 'react-datetime';
import Input from './Input';
const DatePicker = ({ label, date, className, onChange, error, }) => {
    const [startDate, setStartDate] = useState(date || new Date());
    useEffect(() => {
        setStartDate(date);
    }, [date]);
    const handleChange = (date) => {
        setStartDate(new Date(date));
        onChange?.(new Date(date));
    };
    return (_jsx(Datetime, { renderInput: (props) => (_jsx(Input, { ...props, error: error, label: label, className: className, icon: 'Calendar' })), initialValue: startDate, onChange: handleChange }));
};
export default DatePicker;
