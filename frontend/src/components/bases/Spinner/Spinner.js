import React from 'react';

export const Spinner = (props) => {
  return (
    <div className={`spinner-border ${props.className ? props.className : 'text-info'}`}>
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}