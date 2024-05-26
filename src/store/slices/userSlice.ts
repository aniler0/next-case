import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUserModel } from "types/IUserModel";

const initialState: IUserModel = {} as IUserModel;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserModel>) => {
      const user = action.payload;
      state = user;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
