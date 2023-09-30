import React from "react";
import styles from "./OrderInfo.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import InterpreterModeOutlinedIcon from "@mui/icons-material/InterpreterModeOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import BrunchDiningOutlinedIcon from "@mui/icons-material/BrunchDiningOutlined";

function OrderInfo() {
  return (
    <div className={styles["orderinfo-container"]}>
      <div className={styles.item}>
        <h1>Supplier</h1>
        <p> East coast fruits & vegetables</p>
      </div>
      <div className={styles.item}>
        <h1>Shipping date</h1>
        <p>Thu, Feb 10</p>
      </div>
      <div className={styles.item}>
        <h1>Total</h1>
        <p> $ 15,028.3</p>
      </div>
      <div className={styles.item}>
        <h1>Category</h1>
        <div className={styles["category-icons"]}>
          <FastfoodOutlinedIcon color="action" />
          <BrunchDiningOutlinedIcon color="action" />
          <AcUnitIcon color="action" />
          <BakeryDiningOutlinedIcon color="action" />
          <DeviceHubOutlinedIcon color="action" />
          <NightsStayOutlinedIcon color="action" />
          <InterpreterModeOutlinedIcon color="action" />
          <ForestOutlinedIcon color="action" />
        </div>
      </div>
      <div className={styles.item}>
        <h1>Department</h1>
        <p> 300-444-678</p>
      </div>
      <div className={styles.item}>
        <h1>Status</h1>
        <p> Awaiting your approval</p>
      </div>
    </div>
  );
}

export default OrderInfo;
