import React from 'react';

export const Checkbox = (props) => {
  return (
    <div className={`form-check ${props.className ? props.className : ''}`}>
      <label
        className='form-check-label'
        htmlFor={props.id}>
        <input className={`form-check-input ${props.invalid ? 'is-invalid' : ''}`}
          type='checkbox'
          value={props.value}
          checked={props.checked ? true : false}
          disabled={props.disabled ? true : false}
          indeterminate={props.indeterminate ? 'true' : false}
          id={props.id ? props.id : false}
          name={props.name ? props.name : false}
          onChange={props.changed}
        />
        {props.children}
      </label>
      {
        props.invalid &&
        <div className='invalid-feedback'>{props.errorMsg}</div>
      }
    </div>
  );
};