import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import Loader from './Loader';

const ImageFullView = ({
  imageUrl,
  onClose,
  image,
  children,
}: {
  imageUrl?: string;
  onClose?: () => void;
  image?: any;
  children?: ReactNode;
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative h-full w-full flex justify-center items-center">
        <Icon
          name="Close"
          size={36}
          className="absolute top-4 right-4 bg-white text-black rounded-full p-1.5 text-lg cursor-pointer hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />

        {loading && (
          <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
            <Loader color="light" size={32} />
          </div>
        )}

        <Image
          src={imageUrl}
          alt="Full View"
          height={image?.width || 1500}
          width={image?.height || 2000}
          className="object-contain max-h-screen max-w-screen pointer-events-none"
          onLoad={handleImageLoad}
        />
      </div>
      {children}
    </div>
  );
};

export default ImageFullView;
