import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photoReducer from "./photos/photo.slice";

// STATE
const rootReducer = combineReducers({
    photoReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// CORE
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
});

// ACTION
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
