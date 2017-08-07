import { createStore, combineReducers } from "redux";
import boardReducer from "../reducers/boardReducer";

let reducers = combineReducers({
  board: boardReducer
});

let store = createStore(reducers);
export default store;

store.subscribe(() => {
  console.log(store.getState());
});
