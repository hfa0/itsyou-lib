import React from "react"
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
  return (
    <Link href={href || '/'} className="shrink-0">
      <LogoSvg
        className={classNames(
          {
            'text-black': mode === 'black',
            'text-white': mode === 'white',
          },
          className,
        )}
        width={size || 50}
      />
    </Link>
  );
};
export default Logo;
