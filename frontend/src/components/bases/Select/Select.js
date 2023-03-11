import React from 'react';

export const Select = (props) => {
  const { invalid, label, floating, value, options, className, multiple, disabled } = props;

  return (
    <div className={`${floating ? 'form-floating' : ''} ${className ? className : ''}`}>
      {
        floating &&
        <select
          className='form-select'
          id={props.id}
          value={value}
          name={props.name}
          multiple={multiple ? true : false}
          disabled={disabled ? true : false}
          onChange={props.changed}
        >
          {
            options.map((opt, idx) => (
              <option
                key={opt.value}
                value={opt.value}
                defaultValue={opt.value === value ? true : false}
              >{opt.displayValue || opt.value}</option>
            ))
          }
        </select>
      }
      <label
        htmlFor={props.id}
        className={`${floating ? '' : 'form-label'}`}
      >{label}</label>
      {
        !floating &&
        <select
          className='form-select'
          id={props.id}
          value={value}
          name={props.name}
          multiple={multiple ? true : false}
          disabled={disabled ? true : false}
          onChange={props.changed}
        >
          {
            options.map((opt, idx) => (
              <option
                key={idx}
                value={opt.value}
                defaultValue={opt.value === value ? true : false}
              >{opt.displayValue || opt.value}</option>
            ))
          }
        </select>
      }
      {
        invalid &&
        <div className='invalid-feedback'>{props.errorMsg}</div>
      }
    </div>
  );
}