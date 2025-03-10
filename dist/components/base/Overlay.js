import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, Fragment } from "react";
import { Transition } from "@headlessui/react";
import classNames from "classnames/dedupe";
function Overlay(props, ref) {
    const { classes } = props;
    return (_jsx(Transition.Child, { ref: ref, as: Fragment, enter: classNames("ease-out duration-300", classes?.transitionEnter), enterFrom: classNames("opacity-0", classes?.transitionEnterFrom), enterTo: classNames("opacity-100", classes?.transitionEnterTo), leave: classNames("ease-in duration-200", classes?.transitionLeave), leaveFrom: classNames("opacity-100", classes?.transitionLeaveFrom), leaveTo: classNames("opacity-0", classes?.transitionLeaveTo), children: _jsx("div", { className: classNames(classes?.background, "fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur transition-opacity") }) }));
}
export default forwardRef(Overlay);
