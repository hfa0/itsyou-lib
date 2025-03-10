import { IconType } from './Icon';
type Props = {
    icon: IconType;
    onClick?: () => void;
    href?: string;
};
declare const ButtonIcon: ({ icon, onClick, href }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonIcon;
