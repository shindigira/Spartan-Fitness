import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "src/store/navbarSlice";
import appStateReducer from "src/store/appStateSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    appState: appStateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
