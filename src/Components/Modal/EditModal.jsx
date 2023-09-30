import { useState } from "react";
import classes from "./EditModal.module.scss";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { updateItemPriceQuantity } from "../../store/index";

const reasons = [
  "Missing Product",
  "Quantity is not the same",
  "Price is not the same",
  "others",
];
const Backdrop = (props) => {
  const handleClose = () => {
    props.setEditModal(false);
  };
  return <div className={classes.backdrop} onClick={handleClose}></div>;
};
const ModalOverlay = (props) => {
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setEditModal(false);
  };

  const handleStatusChange = () => {
    // as mentioned in assignment that price and quantity can be zero
    if (newPrice >= 0 && newQuantity >= 0) {
      dispatch(
        updateItemPriceQuantity({
          productId: props.orderData.productId,
          nPrice: newPrice,
          nQuantity: newQuantity,
        })
      );
      props.setEditModal(false);
    } else {
      alert("enter correct value of price and quantity");
    }
  };

  return (
    <div className={classes.modal}>
      <div className="flex flex-col p-4 gap-y-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-500">{props.orderData.productName}</h1>
          <XMarkIcon className="h-5 w-5 cursor-pointer" onClick={handleClose} />
        </div>

        <h2 className="text-slate-500">{props.orderData.brand}</h2>
        <div className="grid grid-cols-2">
          <img className="h-20 w-20" src="./Avocado.jpg" alt="avocado" />
          <div className=" grid grid-cols-2 items-center gap-y-4">
            <h2>Price</h2>
            <input
              className=" rounded-[.5rem] w-2/3 focus:outline-0 px-2 "
              onChange={(e) => setNewPrice(e.target.value)}
            ></input>
            <h2>Quantity</h2>
            <input
              className=" rounded-[.5rem] w-2/3 focus:outline-0 px-2 "
              onChange={(e) => setNewQuantity(e.target.value)}
            ></input>
            <h2>Total</h2>
            <p>
              ${newPrice >= 0 && newQuantity >= 0 ? newPrice * newQuantity : 0}
            </p>
          </div>
        </div>
        <h2>
          Choose Reason <span className="text-slate-500">(Optional)</span>
        </h2>
        <div className="flex flex-row gap-x-3">
          {reasons.map((p, index) => {
            return (
              <button
                key={index}
                className="text-slate-500 border border-slate-400 px-[.3rem] rounded-[1rem]"
              >
                {p}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-end gap-3">
          <button className="text-[#2a523e] font-medium" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="bg-[#2a523e] text-white px-4 py-1 rounded-[1rem]"
            onClick={handleStatusChange}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setEditModal={props.setEditModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          orderData={props.orderData}
          setEditModal={props.setEditModal}
        />,
        portalElement
      )}
    </>
  );
};
export default Modal;
