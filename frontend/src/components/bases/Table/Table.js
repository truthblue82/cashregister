import React from 'react';

export const Table = (props) => {
  const { headers, className } = props;

  return (
    <div className='application'>
      <table className={`table table-sm table-bordered ${className ? className : ''}`}>
        <thead>
          <tr>
            {
              Array.isArray(headers) && headers.map((header, idx) => (
                <th key={idx}
                  colSpan={header.col | 1}
                  className={`${header.className ? header.className : ''}`}
                >{header.name}</th>
              ))
            }
          </tr>
        </thead>
        {
          props.children && 
          <tbody>
              {props.children}
          </tbody>
        }
      </table>
    </div>
  )
}