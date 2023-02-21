import Square from "./Square";
import {useState} from "react";

export default function Board() {
    //creates an array with nine elements and sets each of them to null
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    function handleClick() {
      const nextSquares = squares.slice();
      nextSquares[0] = "X";
      setSquares(nextSquares)
    }
    
    return (
      <>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[1]} onSquareClick={handleClick} />
          <Square value={squares[2]} onSquareClick={handleClick} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} onSquareClick={handleClick} />
          <Square value={squares[4]} onSquareClick={handleClick} />
          <Square value={squares[5]} onSquareClick={handleClick}/>
        </div>
        <div className='board-row'>
          <Square value={squares[6]} onSquareClick={handleClick}/>
          <Square value={squares[7]} onSquareClick={handleClick}/>
          <Square value={squares[8]} onSquareClick={handleClick}/>
        </div>
      </>
    );
  }