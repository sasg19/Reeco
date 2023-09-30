import { createSlice, configureStore } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: { orderData: [] },
  reducers: {
    setOrderData(state, action) {
      const newItem = action.payload;
      state.orderData.push(newItem);
    },
    updateItemStatus(state, action) {
      console.log(action.payload);
      const { itemId, stats } = action.payload;
      const item = state.orderData.find((p) => p.productId === itemId);
      if (item) {
        item.status = stats;
      }
    },
    updateItemPriceQuantity(state, action) {
      const { productId, nPrice, nQuantity } = action.payload;

      const existingItem = state.orderData.find(
        (p) => p.productId === productId
      );
      if (existingItem) {
        existingItem.price = nPrice;
        existingItem.quantity = nQuantity;
      }
    },
  },
});

const store = configureStore({ reducer: { order: OrderSlice.reducer } });

export const { setOrderData, updateItemStatus, updateItemPriceQuantity } =
  OrderSlice.actions;
export default store;
