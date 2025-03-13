import React from 'react';
import Link from 'next/link';
import LogoSvg from '../../assets/logos/logo.svg';
import classNames from 'classnames/dedupe';

const Logo = ({
  size,
  mode = 'black',
  className,
  href,
}: {
  size?: number;
  mode?: 'black' | 'white';
  className?: string;
  href?: string;
}) => {
  const svg = (
    <LogoSvg
      className={classNames(
        {
          'text-black': mode === 'black',
          'text-white': mode === 'white',
        },
        className,
      )}
      width={size || 50}
      height={size || 50}
    />
  );
  if (!href) return svg;
  return (
    <Link href={href} className="shrink-0">
      {svg}
    </Link>
  );
};
export default Logo;
