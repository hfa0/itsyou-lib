declare const FileIconLink: ({ type, url, title, }: {
    type: "Pdf" | "Img";
    url: string;
    title?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default FileIconLink;
