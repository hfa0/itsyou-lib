import React, { ReactNode } from 'react';
import classNames from 'classnames/dedupe';

const Tooltip = ({
  title,
  children,
  headerClassName,
  wrapperClassName,
}: {
  title: string;
  children: ReactNode;
  headerClassName?: string;
  wrapperClassName?: string;
}) => (
  <div className={classNames(wrapperClassName, 'bg-white flex-1 flex flex-col h-full rounded w-60 shadow-md overflow-hidden')}>
    {title && (
      <div
        className={classNames(
          headerClassName,
          'p-2 border bg-gray-50',
        )}
      >
        <h5>{title}</h5>
      </div>
    )}
    <div className={'space-y-2 p-2 border-r border-l border-b flex-1 overflow-y-scroll'}>{children}</div>
  </div>
);

export default Tooltip;
