import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "src/utility/types";

const initialState: AppState = {
  isTopOfPage: true,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsTopOfPage: (state, action: PayloadAction<boolean>) => {
      state.isTopOfPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsTopOfPage } = appStateSlice.actions;

export default appStateSlice.reducer;
