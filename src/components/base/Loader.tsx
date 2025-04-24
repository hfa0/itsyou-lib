import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Loader = ({
  color = 'light',
  size = 15,
}: {
  color?: 'dark' | 'light';
  size?: number;
}) => {
  return (
    <MoonLoader
      size={size}
      color={color === 'dark' ? '#000000' : '#fff'}
    />
  );
};

export default Loader;
