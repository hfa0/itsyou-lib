import React, { useState, useEffect } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Icon from './Icon';
import Loader from './Loader';
import Image from 'next/image';
import classNames from 'classnames/dedupe';

export type FileUploadDragProps = {
  onChange?: (file: { blob: Blob; url }) => void;
  accept?: string[];
  error?: string;
  className?: string;
  text?: string;
  defaultImgUrl?: string;
  imageClassName?: string;
  hideClose?: boolean;
  loaderColor?: 'light' | 'dark';
};

const FileUploadDrag = ({
  onChange,
  accept,
  error,
  className,
  text,
  defaultImgUrl,
  imageClassName,
  hideClose,
  loaderColor = 'light',
}: FileUploadDragProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(defaultImgUrl);

  const handleChange = (file: Blob) => {
    setIsLoading(true);
    const objectUrl = URL.createObjectURL(file);
    onChange?.({ blob: file, url: objectUrl });
    setImageUrl(objectUrl);
  };

  // Cleanup URL when component unmounts or when a new file is selected
  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    setImageUrl(defaultImgUrl);
  }, [defaultImgUrl]);
  return (
    <div className={'space-y-2 w-full h-full'}>
      <div
        className={classNames(
          className,
          'bg-dark  w-full h-full rounded-lg over-flow-hidden hover:bg-dark/80 p-3 relative flex flex-col items-center justify-center ',
          {
            'outline outline-[5px] outline-secondary':
              error,
          },
        )}
      >
        {!isLoading && !imageUrl && (
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={accept}
            classes={'h-full flex w-full'}
          >
            <div className="h-full w-full border-3 border-dashed border-light/80 flex flex-col justify-center items-center rounded-lg p-12 space-y-2">
              <Icon name={'Camera'} size={40} />
              {text && (
                <p className={'font-thin'}>{text}</p>
              )}
            </div>
          </FileUploader>
        )}

        {/* Image Preview with Proper Containment */}
        {imageUrl && (
          <div
            className={classNames(
              'absolute inset-0 bg-dark flex justify-center items-center overflow-hidden',
              { invisible: !imageUrl || isLoading },
            )}
          >
            <div className="relative w-full h-full">
              <Image
                fill={true}
                src={imageUrl}
                alt="Uploaded Preview"
                className={classNames(
                  imageClassName,
                  'max-w-full max-h-full object-contain',
                )}
                onLoad={() => setIsLoading(false)}
              />
              {!hideClose && (
                <Icon
                  onClick={() => {
                    setImageUrl(null);
                    onChange?.(undefined);
                  }}
                  name={'Close'}
                  size={32}
                  className={
                    'absolute right-3 top-3 bg-white text-gray-900 border rounded cursor-pointer hover:bg-gray-50 p-1 z-10'
                  }
                />
              )}
            </div>
          </div>
        )}

        {/* Show loader only while loading */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center  ">
            <Loader color={loaderColor} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadDrag;
