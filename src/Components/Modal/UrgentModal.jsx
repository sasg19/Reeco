import classes from "./EditModal.module.scss";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { updateItemStatus } from "../../store/index";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      updateItemStatus({ itemId: props.orderData.productId, stats: "Missing" })
    );
    props.setOpenUrgentModal(false);
  };

  return <div className={classes.backdrop} onClick={handleClose}></div>;
};

const ModalOverlay = (props) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(
      updateItemStatus({
        itemId: props.orderData.productId,
        stats: "Missing-Urgent",
      })
    );
    props.setOpenUrgentModal(false);
  };
  const handleClose = () => {
    dispatch(
      updateItemStatus({ itemId: props.orderData.productId, stats: "Missing" })
    );
    props.setOpenUrgentModal(false);
  };

  return (
    <div className={classes.modal}>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-row justify-between">
          <h1 className="font-500">Missing Product</h1>
          <XMarkIcon className="h-5 w-5 cursor-pointer" onClick={handleClose} />
        </div>

        <h2>Is "{props.orderData.productName}" Urgent?</h2>
        <div className="flex flex-row gap-5 text-slate-500 justify-end">
          <button className="hover:text-[#2a523e]" onClick={handleClose}>
            No
          </button>
          <button className="hover:text-[#2a523e]" onClick={handleStatusChange}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const UrgentModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          setOpenUrgentModal={props.setOpenUrgentModal}
          orderData={props.orderData}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          orderData={props.orderData}
          setOpenUrgentModal={props.setOpenUrgentModal}
        />,
        portalElement
      )}
    </>
  );
};
export default UrgentModal;
