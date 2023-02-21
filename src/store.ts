import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "src/navbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
