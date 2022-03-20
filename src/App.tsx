import React from 'react';

import ChessBoard from './components/chess-board/chess-board.component';
import Queen from './components/queen/queen.component';
import Title from './components/title/title.component';

import Button from './components/button/button.component';

import './App.css';

const HandleClick = () => console.log('CLICK')

// const App = () => (
//   <>
//     <div className='exercise'>
//       <div className='exercise--title'>
//         <Title text='Actividad II'/>
//       </div>
//       <div className='exercise--board'>
//         <ChessBoard />
//       </div>
//       <div className='exercise--seccion'>
//         <Button handleClick={HandleClick}>
//           Start Exercise
//         </Button>
//       </div>
//     </div>
//     <div className='pieces'>
//       <div style={{position: 'relative', bottom: '202px', left:'4px'}}>
//         <Queen />
//       </div>
//       <div style={{position: 'relative', bottom: '435px', left:'4px'}}>
//         <Queen />
//       </div>
//       <div style={{position: 'relative', bottom: '669px', left:'4px'}}>
//         <Queen />
//       </div>
//       <div style={{position: 'relative', bottom: '905px', left:'4px'}}>
//         <Queen />
//       </div>
//       <div style={{position: 'relative', bottom: '1138px', left:'4px'}}>
//         <Queen />
//       </div>
//       <div style={{position: 'relative', bottom: '1372px', left:'4px'}}>
//         <Queen />
//       </div>
//     </div>
//   </>
// )

const App = () => (
  <>
    <Title text='Actividad 2' />
    <ChessBoard/>
  </>
)

export default App;
