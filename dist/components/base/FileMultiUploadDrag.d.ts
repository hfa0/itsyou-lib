import { FileUploadDragProps } from './FileUploadDrag';
declare const FileMultiUploadDrag: ({ onChange, accept, error, className, text, loaderColor, multiple, isLoading, loadingText, }: Omit<FileUploadDragProps, "onChange"> & {
    multiple?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    onChange?: (files: File[]) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default FileMultiUploadDrag;
