import { toast, ToastContainer } from 'react-toastify';

export const toasterErrorApi = (err: any) =>
  toast(
    `Server error: ${err.response?.data?.message || err.message}`,
    {
      type: 'error',
    },
  );

export const toasterError = (msg: string) =>
  toast(msg, { type: 'error' });
export const toasterSuccess = (msg: string) =>
  toast(msg, { type: 'success' });

export { ToastContainer };
