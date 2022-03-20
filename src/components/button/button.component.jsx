import React from 'react';

import './button.styles.css'

const Button = ({ handleClick, children }) => (
  <button className='btn' onClick={handleClick}>{children}</button>
)

export default Button;