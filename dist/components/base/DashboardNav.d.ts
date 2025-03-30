import { IconType } from './Icon';
export type NavEntry = {
    name: string;
    href: string;
    icon: IconType;
    children?: NavEntry[];
};
export type TDashboardNav = Record<string, NavEntry[]>;
declare const DashboardNav: ({ nav, selectedPath, close, }: {
    nav: TDashboardNav;
    selectedPath: string;
    close?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default DashboardNav;
