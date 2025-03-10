import { toast, ToastContainer } from 'react-toastify';
export const toasterErrorApi = (err) => toast(`Server error: ${err.response?.data?.message || err.message}`, {
    type: 'error',
});
export const toasterError = (msg) => toast(msg, { type: 'error' });
export const toasterSuccess = (msg) => toast(msg, { type: 'success' });
export { ToastContainer, };
