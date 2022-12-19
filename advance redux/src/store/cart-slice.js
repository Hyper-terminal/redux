import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        //increase qty
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
