import { ReactNode } from 'react';
interface Props {
    items: {
        name: string;
        panel: ReactNode;
    }[];
    listClassName?: string;
    wrapperClassName?: string;
    listWrapperClassName?: string;
    buttonClassName?: string;
    selectedClassName?: string;
}
export default function Tabs({ items, listClassName, buttonClassName, listWrapperClassName, selectedClassName, wrapperClassName, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
