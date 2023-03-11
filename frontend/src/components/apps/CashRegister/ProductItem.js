import React from 'react';

export const ProductItem = (props) => {
  return (
    <tr>
      <td className='float-right'>{props.id}</td>
      <td className='center'>{props.name}</td>
      <td className='float-right'>{props.price}</td>
      <td className='float-right'>{props.quantity}</td>
      <td className='float-right'>{props.price*props.quantity}</td>
    </tr>
  );
}
