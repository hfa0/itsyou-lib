import { TDashboardNav } from '../components/base/DashboardNav';
interface Props {
    children: React.ReactNode;
    nav: TDashboardNav;
    contentClassName?: string;
    currentPath: string;
}
export default function DashboardLayout({ children, nav, contentClassName, currentPath, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
