"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = exports.toasterSuccess = exports.toasterError = exports.toasterErrorApi = void 0;
const react_toastify_1 = require("react-toastify");
Object.defineProperty(exports, "ToastContainer", { enumerable: true, get: function () { return react_toastify_1.ToastContainer; } });
const toasterErrorApi = (err) => (0, react_toastify_1.toast)(`Server error: ${err.response?.data?.message || err.message}`, {
    type: 'error',
});
exports.toasterErrorApi = toasterErrorApi;
const toasterError = (msg) => (0, react_toastify_1.toast)(msg, { type: 'error' });
exports.toasterError = toasterError;
const toasterSuccess = (msg) => (0, react_toastify_1.toast)(msg, { type: 'success' });
exports.toasterSuccess = toasterSuccess;
