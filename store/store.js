import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import { rootReducer } from "./reducers/index";

const initalState = {};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middleware
const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const makeStore = () => store;

export const persistor = persistStore(store);
export const wrapper = createWrapper(makeStore);
