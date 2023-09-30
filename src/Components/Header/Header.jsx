import React from "react";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles["navbar-container"]}>
        <ul className={styles.navigation}>
          <li>
            <b className={styles.title}>Reeco</b>
          </li>
          <li>Store</li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
        <div className={styles.profile}>
          <span>
            <ShoppingCartIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-row">
            Hello,
            <select defaultValue="James" className="focus:outline-0">
              <option>James</option>
              <option>Logout</option>
            </select>
          </div>
        </div>
      </nav>
      <div className={styles["order-navigation"]}>
        <div>
          Orders {">"} <p className={styles.orderno}>Order 32457ABC</p>
        </div>
      </div>
      <div className={styles["heading-orderdetail"]}>
        <p className={styles["order-number"]}>Order 32457ABC</p>

        <div className={styles["btn-cta"]}>
          <button className={styles["btn-back"]}>Back</button>
          <button className={styles["btn-approveorder"]}>Approve Order</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
