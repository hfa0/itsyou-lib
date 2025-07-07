import { IItemAutoComplete } from '../../types';
export interface AutoCompleteDropdownProps {
    items: IItemAutoComplete[];
    className?: string;
    wrapperClassName?: string;
    label?: string;
    onChangeDropdown?: (item?: IItemAutoComplete) => void;
    disableCloseOnClick?: boolean;
    title?: string;
    error?: string;
    hideError?: boolean;
    placeholder?: string;
    selectedClassName?: string;
    show?: number;
    queryFn: (items: IItemAutoComplete[], query: string) => IItemAutoComplete[];
}
declare function AutoCompleteDropdown({ placeholder, onChangeDropdown, items, queryFn, show, }: AutoCompleteDropdownProps): import("react/jsx-runtime").JSX.Element;
export default AutoCompleteDropdown;
