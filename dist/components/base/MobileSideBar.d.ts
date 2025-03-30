import { ReactNode } from 'react';
export default function MobileSideBar({ children, open, setOpen, }: {
    children: ReactNode;
    open: boolean;
    setOpen: (v: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
