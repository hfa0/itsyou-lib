import { ReactNode } from 'react';
import { IconType } from './Icon';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';
interface Props {
    children: ReactNode;
    size?: number;
    icon?: IconType | ReactNode;
    iconClassName?: string;
    className?: string;
    anchor?: AnchorProps;
}
declare function InfoTooltip({ children, size, icon, iconClassName, anchor, className, }: Props): import("react/jsx-runtime").JSX.Element;
export default InfoTooltip;
