import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(
    createBoard(nrows, ncols, chanceLightStartsOn)
  );

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(height, width, chanceLit) {
    const createRow = (nCells, chance) =>
      Array.from({ length: nCells }, (cell) =>
        Math.random() < chance ? true : false
      );
    const board = Array.from({ length: height }, (row) =>
      createRow(width, chanceLit)
    );
    return board;
  }

  /** Check if every cell is false */
  function hasWon(board) {
    return board.every((row) => row.every((cell) => !cell));
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  return (
    <div className="Board">
      {board.map((row) => (
        <tr>
          {row.map((cell) => (
            <Cell isLit={cell}></Cell>
          ))}
        </tr>
      ))}
    </div>
  );
}

export default Board;
