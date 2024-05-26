import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPackageModel } from "types/IPackageModel";
import { ICartInitialState } from "./types";

const initialState: ICartInitialState = {
  cart: [],
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IPackageModel>) => {
      const selectedPackage = action.payload;
      const isPackageInCart = state.cart.some(
        (item) => item._id === selectedPackage._id
      );

      if (!isPackageInCart) {
        return {
          ...state,
          cart: [...state.cart, selectedPackage],
        };
      }
      return state;
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const packageId = action.payload;
      const index = state.cart.findIndex((item) => item._id === packageId);

      if (index !== -1) {
        const updatedBasket = [...state.cart];
        updatedBasket.splice(index, 1);
        return {
          ...state,
          cart: updatedBasket,
        };
      }
      return state;
    },
    clearCart: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = packagesSlice.actions;

export default packagesSlice.reducer;
