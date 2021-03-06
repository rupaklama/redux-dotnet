import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./../../features/contact/counterSlice";
import basketSlice from "../../features/basket/basketSlice";
import { catalogSlice } from "../../features/catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    basket: basketSlice,
    catalog: catalogSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
