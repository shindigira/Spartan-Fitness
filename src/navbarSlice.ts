import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NavbarState, SelectedPage } from "./utility/types";

const initialState: NavbarState = {
  selectedPage: SelectedPage.Home,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<SelectedPage>) => {
      state.selectedPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedPage } = navbarSlice.actions;

export default navbarSlice.reducer;
