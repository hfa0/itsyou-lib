import React, { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import Loader from './Loader';

const ImageFullView = ({
  imageUrl,
  onClose,
  image,
}: {
  imageUrl?: string;
  onClose?: () => void;
  image?: any;
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  if (!imageUrl) {
    return <></>;
  }
  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative h-full w-full">
        <Icon
          name="Close"
          size={36}
          className="absolute top-4 right-4 bg-white text-black rounded-full p-1.5 text-lg cursor-pointer hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />

        {/* Full-screen image loader */}
        {loading && (
          <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ">
            <Loader color={'light'} size={32} />
          </div>
        )}
        <div className="w-full h-full flex justify-center">
          <Image
            src={imageUrl}
            alt={'Full View'}
            height={image?.width || 1500}
            width={image?.height || 2000}
            className="object-contain min-h-screen max-h-screen min-w-screen max-w-screen"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageFullView;
