import store from "../store/store";

export const displayBoard = index => {
  store.dispatch({
    type: "DISPLAY_BOARD",
    payload: index
  });
};
export const resetBoard = index => {
  store.dispatch({
    type: "RESET_BOARD"
  });
};
