import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../assets/logos/logo.png';

const Logo = ({
  size,
  href,
}: {
  size?: number;
  href?: string;
}) => {
  return (
    <Link href={href || '/'} className="shrink-0">
      <Image
        width={size || 50}
        height={size || 50}
        src={LogoImg}
        alt={'its you model agentur agency hostess'}
      />
    </Link>
  );
};

export default Logo;
