import React, { useState } from 'react';
import eyeSlash from 'images/eye-slash.svg';
import eye from 'images/eye.svg';

export const Input = (props) => {
  const [hidden, setHidden] = useState(true);
  const { floating, type, className, label, value, invalid } = props;

  const showImg = () => {
    return <img src={eye} width='30' height='30' style={{ cursor: 'pointer'}} className='svgIcon' />;
  }
  const hideImg = () => {
    return <img src={eyeSlash} width='30' height='30' style={{ cursor: 'pointer'}} className='svgIcon' />;
  }
  return (
    <div className={`mb-3 ${floating ? 'form-floating' : ''} ${className ? className : ''} ${type==='password' ? 'input-group' : ''}`}>
      {
        floating && 
        <input
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          className={`form-control ${invalid ? 'is-invalid' : ''}`}
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled ? true : false}
          readOnly={props.readOnly ? true : false}
          value={value}
          name={props.name}
          onChange={props.changed}
        />
      }
      {
        floating && type === 'password' &&
        <span className="input-group-text" onClick={() => setHidden(hidden => !hidden)}>{hidden ? showImg() : hideImg()}</span>
      }
      <label
        htmlFor={props.id}
        className={floating ? '' : 'form-label'}
      >{label}</label>
      {
        !floating &&
        <input
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          className={`form-control ${invalid ? 'is-invalid' : ''}`}
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled ? true : false}
          readOnly={props.readOnly ? true : false}
          value={value}
          name={props.name}
          onChange={props.changed}
        />
      }
      {
        !floating && type === 'password' &&
        <span className="input-group-text" onClick={() => setHidden(hidden => !hidden)}>{hidden ? showImg() : hideImg()}</span>
      }
      {
        invalid &&
        <div
          className="invalid-feedback">
          {props.errorMsg}
        </div>
      }
    </div>
  );
};