import { jsx as _jsx } from "react/jsx-runtime";
function Tag(props) {
    return (_jsx("span", { className: 'bg-light py-1 px-4 rounded-full bg-opacity-60 border border-light text-primary font-medium', children: props.tag }));
}
export default Tag;
