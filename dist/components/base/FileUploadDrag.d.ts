export type FileUploadDragProps = {
    onChange?: (file: {
        blob: Blob;
        url: any;
    }) => void;
    accept?: string[];
    error?: string;
    className?: string;
    text?: string;
    defaultImgUrl?: string;
    imageClassName?: string;
    hideClose?: boolean;
    loaderColor?: 'light' | 'dark';
};
declare const FileUploadDrag: ({ onChange, accept, error, className, text, defaultImgUrl, imageClassName, hideClose, loaderColor, }: FileUploadDragProps) => import("react/jsx-runtime").JSX.Element;
export default FileUploadDrag;
