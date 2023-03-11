import React from 'react';

export const Radio = (props) => {
  return (
    <div className={`form-check ${props.className ? props.className : ''}`}>
      <input
        className='form-check-input'
        type='radio'
        checked={props.checked ? true : false}
        disabled={props.disabled ? true : false}
        name={props.name ? props.name : false}
        value={props.value}
        id={props.id ? props.id : false}
        onChange={props.clicked}
      />
      <label
        className='form-check-label'
        htmlFor={props.id} >{props.children}</label>
    </div>
  )
};