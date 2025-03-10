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
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative">
        <Icon
          name="Close"
          className="absolute top-4 right-4 bg-white text-black rounded-full p-1 text-lg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />

        {/* Full-screen image loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Loader />
          </div>
        )}

        <Image
          src={imageUrl}
          alt="Full View"
          width={800}
          height={600}
          className="rounded-lg max-w-full max-h-screen object-contain"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default ImageFullView;
