declare const DatePicker: ({ label, date, className, onChange, error, }: {
    label?: string;
    date?: Date;
    className?: string;
    onChange?: (date: Date) => void;
    error?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
