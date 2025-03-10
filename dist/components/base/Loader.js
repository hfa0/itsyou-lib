import { jsx as _jsx } from "react/jsx-runtime";
import MoonLoader from 'react-spinners/MoonLoader';
const Loader = ({ color = 'light', size = 15, }) => {
    return (_jsx(MoonLoader, { size: size, color: color === 'dark' ? '#4A1FB8' : '#fff' }));
};
export default Loader;
