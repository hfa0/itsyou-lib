import classNames from 'classnames/dedupe';
import {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
} from 'react';
import Link from 'next/link';
import Icon, { IconType } from './Icon';
import Loader from './Loader';

const IconButton = ({
  onClick,
  icon,
  isLoading,
  href,
  target,
  disabled,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
  isLoading?: boolean;
  icon: IconType;
  href?: HTMLAttributeAnchorTarget;
  target?: string;
  disabled?: boolean;
}) => {
  const Comp = (
    <div
      onClick={onClick}
      className={classNames(
        'flex items-center justify-center w-9 h-9 border p-2 rounded hover:bg-gray-50 cursor-pointer shadow-sm text-gray-600 bg-white',
        {
          'pointer-events-none ': disabled || isLoading,
          'opacity-70': disabled,
        },
      )}
    >
      {isLoading ? (
        <Loader color={'dark'} />
      ) : (
        <Icon name={icon} />
      )}
    </div>
  );
  if (href)
    return (
      <Link target={target} href={href}>
        {Comp}
      </Link>
    );
  return Comp;
};

export default IconButton;
