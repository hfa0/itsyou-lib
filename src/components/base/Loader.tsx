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
      color={color === 'dark' ? '#4A1FB8' : '#fff'}
    />
  );
};

export default Loader;
