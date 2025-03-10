import { IItem } from '../../types';
export interface DropdownProps {
    items: IItem[];
    className?: string;
    wrapperClassName?: string;
    label?: string;
    right?: boolean;
    onChangeDropdown?: (item?: IItem) => void;
    unset?: boolean;
    disableCloseOnClick?: boolean;
    title?: string;
    defaultValue?: number;
    error?: string;
    hideError?: boolean;
}
declare function Dropdown({ items, className, label, right, wrapperClassName, onChangeDropdown, defaultValue, unset, disableCloseOnClick, title, error, hideError, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export default Dropdown;
