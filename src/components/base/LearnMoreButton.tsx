import React from "react";
import Link from 'next/link';
import Icon from './Icon';

function LearnMoreButton({ href }: { href: string }) {
  return (
    <Link href={href} className={'text-primary font-medium hover:text-gray-400'}>
      <span className={'inline-flex gap-x-1.5 items-center pt-4'}>
        Mehr erfahren <Icon size={18} name={'ArrowRight'} />
      </span>
    </Link>
  );
}

export default LearnMoreButton;