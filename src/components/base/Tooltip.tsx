import React, { ReactNode } from 'react';

const Tooltip = ({
                   title,
                   children,
                 }: {
  title: string;
  children: ReactNode;
}) => (
  <div className={'space-y-3'}>
    <div>
      <h5>{title}</h5>
    </div>
    <div className={'space-y-2'}>{children}</div>
  </div>
);

export default Tooltip;
