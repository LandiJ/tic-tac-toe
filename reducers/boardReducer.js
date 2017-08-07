let initialState = {
  turn: [],
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
};

export default (state = initialState.board, action) => {
  let turn = initialState.turn;
  let newState = state.slice();
  let index = action.payload;

  switch (action.type) {
    case "DISPLAY_BOARD":
      if (turn.length === 0) {
        turn.push("X");
        newState[index] = "X";
      } else if (turn[turn.length - 1] === "X") {
        turn.push("O");
        newState[index] = "O";
      } else {
        turn.push("X");
        newState[index] = "X";
      }
      console.log(newState);
      return newState;

    default:
      return newState;
  }
};
