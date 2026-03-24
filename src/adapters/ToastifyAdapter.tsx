import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog";

export const ToastifyAdapter = {
    sucess: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    warning: (message: string) => toast.warning(message),
    info: (message: string) => toast.info(message),
    dismiss: () => toast.dismiss(),
    confirm: (message: string, onClosing: (confirmation: boolean) => void ) => 
        toast(({closeToast}) => (
            <Dialog closeToast={closeToast} data={message} />
        ), {
            onClose: response => {
                return onClosing(Boolean(response))
            },
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        })
}