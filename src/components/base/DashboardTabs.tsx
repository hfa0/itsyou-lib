import React, { ReactNode } from 'react';
import Tabs from './Tabs';

const DashboardTabs = ({
  items,
}: {
  items: { name: string; panel: ReactNode }[];
}) => {
  return (
    <Tabs
      selectedClassName={''}
      listClassName={
        'bg-gray space-x-0 !p-0 !border-2 !rounded-md !w-auto !max-w-lg !w-full divide-x divide-gray-300'
      }
      buttonClassName={
        'shadow-none !py-2 !rounded-none px-3 focus-visible:!ring-0 focus-visible:!outline-0 focus-visible:!ring-offset-0 whitespace-nowrap'
      }
      listWrapperClassName={'!justify-start'}
      items={items}
    ></Tabs>
  );
};

export default DashboardTabs;
