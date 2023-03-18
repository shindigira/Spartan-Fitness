import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NavbarState, SelectedPage } from "src/utility/types";

const initialState: NavbarState = {
  selectedPage: SelectedPage.Home,
  isMenuToggled: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<SelectedPage>) => {
      state.selectedPage = action.payload;
    },
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenuToggled = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedPage, toggleMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
