import React from 'react';
import Link from 'next/link';
import Icon, { IconType } from './Icon';

type Props = {
  icon: IconType;
  onClick?: () => void;
  href?: string;
  target?: string;
};

const ButtonIcon = ({
  icon,
  onClick,
  href,
  target,
}: Props) => {
  const I = (
    <Icon
      size={28}
      name={icon}
      className={
        'cursor-pointer text-gray-700 border p-1.5 rounded shadow-sm hover:bg-gray-50/70'
      }
      onClick={onClick}
    />
  );
  if (href)
    return (
      <Link target={target} href={href}>
        {I}
      </Link>
    );
  return I;
};

export default ButtonIcon;
