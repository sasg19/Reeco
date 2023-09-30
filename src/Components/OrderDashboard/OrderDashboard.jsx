import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData, updateItemStatus } from "../../store/index";
import {
  PrinterIcon,
  CheckIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import sampleData from "../../../public/data.json";
import styles from "./OrderDashboard.module.scss";
import UrgentModal from "../Modal/UrgentModal";
import Modal from "../Modal/EditModal";

function OrderDashboard() {
  const [openUrgentModal, setOpenUrgentModal] = useState(false);
  const [orderObject, setOrderObject] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order.orderData);
  const filteredOrders = data.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const dataLoaded = useRef(false);

  useEffect(() => {
    console.log("data loaded");
    if (!dataLoaded.current) {
      sampleData.forEach((item) => {
        dispatch(setOrderData(item));
      });
    }
    dataLoaded.current = true;
  }, [dispatch]);

  console.log(data);

  const handleStatusChange = (item, status) => {
    if (status === "Missing") {
      setOrderObject(item);
      setOpenUrgentModal(true);
    } else {
      dispatch(updateItemStatus({ itemId: item.productId, stats: status }));
    }
  };
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleOrderEdit = (item) => {
    setOrderObject(item);
    setEditModal(true);
  };

  return (
    <>
      <div className={styles["orderData-container"]}>
        <div className={styles["orderData-header"]}>
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={styles["search-input"]}
          />

          <div className={styles["add-print"]}>
            <button className={styles["btn-additem"]}>Add item</button>
            <PrinterIcon className="h-5 w-5 text-[#2a523e]" />
          </div>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Product name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.orderName}>
                      <img
                        className={styles.image}
                        src="./Avocado.jpg"
                        alt="avocado"
                      />
                      <p>{item.productName}</p>
                    </td>
                    <td>{item.brand}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${Number(item.quantity) * Number(item.price)}</td>
                    <td className="bg-[#f8f7f7]">
                      <div className={styles["orderStatus-container"]}>
                        <div>
                          <p
                            className={`${
                              item.status === "Approved" && "bg-green-500 px-3"
                            }
                                ${
                                  item.status === "Missing-Urgent" &&
                                  "bg-red-500 px-1"
                                } 
                                ${
                                  item.status === "Missing" &&
                                  "bg-orange-500 px-3"
                                }
                             flex items-center justify-center text-sm text-white h-8 rounded-[1rem] text-center`}
                          >
                            {item.status}
                          </p>
                        </div>

                        <div className="btn-statusActions">
                          <CheckIcon
                            className="h-5 w-5 text-green-500 inline cursor-pointer"
                            onClick={() => {
                              handleStatusChange(item, "Approved");
                            }}
                          />

                          <XMarkIcon
                            className="h-5 w-5 text-red-500 inline cursor-pointer"
                            onClick={() => {
                              handleStatusChange(item, "Missing");
                            }}
                          />

                          <button
                            className="inline text-slate-500"
                            onClick={() => handleOrderEdit(item)}
                          >
                            edit
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {openUrgentModal && (
          <UrgentModal
            setOpenUrgentModal={setOpenUrgentModal}
            orderData={orderObject}
          />
        )}
        {editModal && (
          <Modal setEditModal={setEditModal} orderData={orderObject} />
        )}
      </div>
    </>
  );
}

export default OrderDashboard;
