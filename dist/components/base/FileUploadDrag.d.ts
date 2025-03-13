export type FileUploadDragProps = {
    onChange?: (file: {
        blob: Blob;
        url: any;
    }) => void;
    accept?: string[];
    error?: string;
};
declare const FileUploadDrag: ({ onChange, accept, error, }: FileUploadDragProps) => import("react/jsx-runtime").JSX.Element;
export default FileUploadDrag;
