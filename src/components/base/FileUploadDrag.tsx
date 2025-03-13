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
};

const FileUploadDrag = ({
  onChange,
  accept,
  error,
}: FileUploadDragProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(
    null,
  );

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
  return (
    <div className={'space-y-2 w-full h-full'}>
      <div
        className={classNames(
          'bg-dark  w-full h-full rounded-lg hover:bg-dark/80 p-3 relative flex flex-col items-center justify-center ',
          {
            'outline outline-[5px] outline-secondary':
              error,
          },
        )}
      >
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={accept}
          classes={'h-full flex w-full'}
        >
          <div className="h-full w-full border-3 border-dashed border-light/80 flex justify-center items-center rounded-lg p-12">
            <Icon name={'Camera'} size={40} />
          </div>
        </FileUploader>

        {/* Image Preview with Proper Containment */}
        {imageUrl && (
          <div
            className={classNames(
              'absolute inset-0 bg-dark rounded-xl flex justify-center items-center overflow-hidden',
              { invisible: !imageUrl || isLoading },
            )}
          >
            <div className="relative w-full h-full">
              <Image
                fill={true}
                src={imageUrl}
                alt="Uploaded Preview"
                className="max-w-full max-h-full object-contain rounded-md"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        )}

        {/* Show loader only while loading */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark rounded-xl">
            <Loader color="light" />
          </div>
        )}
      </div>
      <p
        className={classNames('w-full text-center', {
          invisible: imageUrl,
        })}
      >
        Kein Bild hochgeladen
      </p>
    </div>
  );
};

export default FileUploadDrag;
