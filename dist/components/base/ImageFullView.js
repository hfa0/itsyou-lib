import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import Loader from './Loader';
const ImageFullView = ({ imageUrl, onClose, }) => {
    const [loading, setLoading] = useState(true);
    const handleImageLoad = () => {
        setLoading(false);
    };
    if (!imageUrl) {
        return _jsx(_Fragment, {});
    }
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50", onClick: onClose, children: _jsxs("div", { className: "relative", children: [_jsx(Icon, { name: "Close", className: "absolute top-4 right-4 bg-white text-black rounded-full p-1 text-lg cursor-pointer", onClick: (e) => {
                        e.stopPropagation();
                        onClose?.();
                    } }), loading && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50", children: _jsx(Loader, {}) })), _jsx(Image, { src: imageUrl, alt: "Full View", width: 800, height: 600, className: "rounded-lg max-w-full max-h-screen object-contain", onLoad: handleImageLoad })] }) }));
};
export default ImageFullView;
