import React, { Component } from "react";
import { connect } from "react-redux";
import { displayBoard, resetBoard } from "../actions/actions";
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

class GameDisplay extends Component {
  render() {
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let checkWin = () => {
      for (let i = 0; i < winningCombinations.length; i++) {
        let option1 = winningCombinations[i][0];
        let option2 = winningCombinations[i][1];
        let option3 = winningCombinations[i][2];
        if (
          this.props.board[option1] !== " " &&
          this.props.board[option1] === this.props.board[option2] &&
          this.props.board[option2] === this.props.board[option3]
        ) {
          let letter = this.props.board[option1];
          setTimeout(() => alert(`Game over! ${letter}'s win!`), 200);
          setTimeout(() => this.props.resetBoard(), 200);
        }
      }
    };

    let handlePress = index => {
      if (
        this.props.board[index.index] === "X" ||
        this.props.board[index.index] === "O"
      ) {
        alert("NOOOOO");
        return;
      }

      this.props.displayBoard(index.index);

      console.log(this.props.board[index.index]);

      console.log("HEEEEERRRRR", this.props.board);
    };
    checkWin();

    let list = this.props.board.map((value, index) => (
      <div
        key={index}
        className="block"
        onClick={() => handlePress({ index })}
        style={{
          borderColor: "black",
          borderStyle: "solid",
          width: 200,
          height: 200
        }}
      >
        <p style={{ fontSize: 70 }}>{value}</p>
      </div>
    ));
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {list}
      </div>
    );
  }
}

const mapStateToProps = state => ({ board: state.board });

const mapDispatchToProps = () => ({ displayBoard, resetBoard });

export default connect(mapStateToProps, mapDispatchToProps)(GameDisplay);
