import React from 'react';

export const Card = (props) => {
  const { className, title, subtitle } = props;
  return (
    <div className={`card ${className ? className : ''}`}>
      <div className='card-body'>
        {
          title &&
          <h5 className='card-title'>{title}</h5>
        }
        {
          subtitle &&
          <h6 className='card-subtitle'>{subtitle}</h6>
        }
        <div className='card-text'>{props.children}</div>
      </div>
    </div>
  )
}