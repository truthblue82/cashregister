import { Table } from 'components/bases/Table/Table';
import React, { useState } from 'react';
import { ProductItem } from './ProductItem';

export const ItemList = (props) => {
  const headers = [{ name: "#", className: "float-right" },
    { name: "Product", className: "center" },
    { name: "Unit cost", className: "float-right" },
    { name: "Quantity", className: "float-right" },
    { name: "Total", className: "float-right"}
  ];

  return (
    <Table headers={headers}>
      {
        props.data.map((item, idx) => {
          return <ProductItem key={idx} {...item} />;
        })
      }
    </Table>
  )
}
