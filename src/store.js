import { createStore, combineReducers } from "redux";
import { msgReducer } from "./reducer/msgReducer";

const rootReducer = combineReducers({
  msgReducer
});

const store = createStore(rootReducer);

export default store;
