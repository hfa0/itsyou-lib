import { IconType } from './Icon';
type Props = {
    icon: IconType;
    onClick?: () => void;
    href?: string;
    target?: string;
};
declare const ButtonIcon: ({ icon, onClick, href, target, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonIcon;
