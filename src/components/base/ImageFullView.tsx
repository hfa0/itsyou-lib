import React, { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import Loader from './Loader';

const ImageFullView = ({
  imageUrl,
  onClose,
}: {
  imageUrl?: string;
  onClose?: () => void;
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
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="">
        <Icon
          name="Close"
          size={36}
          className="absolute top-4 right-4 bg-white text-black rounded-full p-1 text-lg cursor-pointer hover:bg-gray-50"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />

        {/* Full-screen image loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <Loader />
          </div>
        )}
        <div className="w-full ">
          <Image
            src={imageUrl}
            alt={'Full View'}
            height={1000}
            width={1000}
            className="object-contain min-h-screen max-h-screen min-w-screen max-w-screen"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageFullView;
