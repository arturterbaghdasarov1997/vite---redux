import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photoReducer from "./photos/photo.slice";
import { cocktailApi } from '../store/cocktails/cocktail.api';

// STATE
const rootReducer = combineReducers({
    photoReducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// CORE
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cocktailApi.middleware)
});

// ACTION
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
