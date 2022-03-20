import React, { useState, useEffect } from 'react';

import Matrix from '../../utils/matrix';
import Queen from '../queen/queen.component';

import './chess-board.styles.css';

const board = Matrix;

const ChessBoard = () => {

  // const [position, setPosion] = useState(["0,0"]);
  const [posQ1, setPosQ1] = useState('["0,0"]');
  const [posQ2, setPosQ2] = useState('["0,0"]');
  const [posQ3, setPosQ3] = useState('["0,0"]');
  const [posQ4, setPosQ4] = useState('["0,0"]');
  const [posQ5, setPosQ5] = useState('["0,0"]');
  const [posQ6, setPosQ6] = useState('["0,0"]');



  // useEffect(() => {
  //   for(let i = 0; i <= 6; i++) {
  //     for(let j = 0; j <= 6; j++) {
  //       board.
  //     }
  //   }
  //   console.log(board[0][1])
  // });

  return (
    <div className='chess-board'>
      {/* Q1 */}
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      {/* END Q1 */}
      {/* Q2 */}
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      {/* END Q2 */}
      {/* Q3 */}
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      {/* END Q3 */}
      {/* Q4 */}
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      {/* END Q4 */}
      {/* Q5 */}
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      {/* END Q5 */}
      {/* Q6 */}
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      <div className="chess-board--item chess-board--item__black">
        <Queen/>
      </div>
      <div className="chess-board--item">
        <Queen/>
      </div>
      {/* END Q6 */}
    </div>
  )
};

export default ChessBoard;
