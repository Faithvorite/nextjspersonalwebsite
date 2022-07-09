import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    paintings: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addPainting: (state, action) => {
      state.paintings.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.paintings.filter(
        (painting) => painting._id !== action.payload._id
      );
      state.paintings = nextCartItems;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      
    },
    reset: (state) => {
      state.paintings = [];
      state.quantity = 0;
      state.total = 0; 
    },
  },
});

export const { addPainting, removeFromCart, reset } = cartSlice.actions;
export default cartSlice.reducer;