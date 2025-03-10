import React from "react";
import Link from 'next/link';
import classNames from 'classnames/dedupe';
import Icon from './Icon';

const FileIconLink = ({
  type,
  url,
  title,
}: {
  type: 'Pdf' | 'Img';
  url: string;
  title?: string;
}) => {
  return (
    <div className={'flex'}>
      <Link
        href={url || '/#'}
        target={url ? '_blank' : undefined}
        className={classNames('cursor-pointer', {
          'pointer-events-none opacity-50': !url,
        })}
      >
        <div className={'flex flex-col items-center justify-center space-y-1'}>
          <Icon name={type} />
          <div className={'font-thin uppercase text-xs'}>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default FileIconLink;
