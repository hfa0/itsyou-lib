export type DatePickerProps = {
    label?: string;
    date?: Date;
    className?: string;
    onChange?: (date: Date) => void;
    error?: string;
};
declare const DatePicker: ({ label, date, className, onChange, error, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
