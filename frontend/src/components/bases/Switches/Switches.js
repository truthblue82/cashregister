import React from 'react';

export const Switches = (props) => {
  return (
    <div className={`form-check form-switch ${props.className ? props.className : ''}`}>
      <input
        className='form-check-input' //is-valid, is-invalid
        type='checkbox'
        role='switch'
        id={props.id ? props.id : false}
        checked={props.checked ? true : false}
        disabled={props.disabled ? true : false}
      />
      <label
        className='form-check-label'
        htmlFor={props.id ? props.id : false}
      >{props.children}</label>
    </div>
  );
};