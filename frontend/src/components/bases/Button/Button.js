import React from 'react';

export const Button = (props) => {
  return (
    <button
      disabled={props.disabled ? true : false}
      className={`btn ${props.className ? props.className : ''}`}
      type={props.type}
      onClick={props.clicked}>{props.children}</button>
  )
};