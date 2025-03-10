import React, { ReactNode } from 'react';
import classNames from 'classnames/dedupe';

function Paragraph({ children, className }: { children: ReactNode, className?: string }) {
  return <p className={classNames('text-base px-3 sm:px-3.5', className)}>{children}</p>;
}

export default Paragraph;