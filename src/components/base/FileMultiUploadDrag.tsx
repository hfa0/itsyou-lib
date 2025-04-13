import { FileUploader } from 'react-drag-drop-files';
import Icon from './Icon';
import Loader from './Loader';
import classNames from 'classnames/dedupe';
import { FileUploadDragProps } from './FileUploadDrag';

const FileMultiUploadDrag = ({
  onChange,
  accept,
  error,
  className,
  text,
  loaderColor = 'light',
  multiple,
  isLoading,
  loadingText,
}: Omit<FileUploadDragProps, 'onChange'> & {
  multiple?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  onChange?: (files: Blob[]) => void;
}) => {
  const handleChange = (files: Blob[]) => {
    onChange?.(files);
  };
  return (
    <div className={'space-y-2 w-full h-full'}>
      <div
        className={classNames(
          className,
          'w-full h-full bg-gray-50 border text-gray-900 hover:bg-gray-100 rounded-lg overflow-hidden p-3 relative ',
          {
            'outline outline-[5px] outline-secondary':
              error,
          },
        )}
      >
        <div
          className={
            'border-3 border-dashed border-light/80 w-full h-full'
          }
        >
          {!isLoading && (
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={accept}
              multiple={multiple}
              classes={'h-full flex w-full'}
            >
              <div className="h-full w-full flex flex-col justify-center items-center p-12 space-y-2">
                <Icon name={'Camera'} size={40} />
                {text && (
                  <p className={'font-thin text-center'}>
                    {text}
                  </p>
                )}
              </div>
            </FileUploader>
          )}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 ">
              <Loader color={loaderColor} />
              {loadingText && (
                <p className={'font-thin text-center'}>
                  {loadingText}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileMultiUploadDrag;
