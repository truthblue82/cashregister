import React, {useState} from 'react';
import { Button } from 'components/bases/Button/Button';
import { Card } from 'components/bases/Card/Card';
import { Input } from 'components/bases/Input/Input';
import { Select } from 'components/bases/Select/Select';

export const ItemAdd = (props) => {
  const [options, setOptions] = useState([{value: 0, displayValue: "Select product"}, { value:1, displayValue: "product 1" }, {value:2, displayValue: "product 2" }, {value:3, displayValue: "product 3"}]);
  const [selectedVal, setSelectedVal] = useState(1);
  const [item, setItem] = useState({product: '', price: "", quantity: ""});

  const onChange = (evt) => {
    setItem({
      ...item,
      [evt.target.name]: evt.target.value
    });
    if (evt.target.name === 'product') {
      setSelectedVal(evt.target.value);
    }
  }

  const saveHandler = () => {
    //
  }

  return (
    <div className='form col-12'>
      <Card>
        <h1 className='float-left'>Item</h1>
        <div className='row'>
          <div className='col-4'>
            <Select
              id='product'
              name='product'
              floating={true}
              value={selectedVal}
              changed={onChange}
              lable="Select choosen product"
              options={options}
            />
          </div>
          <div className='col-3'>
            <Input
              type="number"
              name="price"
              id="price"
              floating={true}
              value={item.price}
              label='Unit Price'
              changed={onChange}
            />
          </div>
          <div className='col-3'>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              floating={true}
              value={item.quantity}
              label='Quantity'
              changed={onChange}
            />
          </div>
          <div className='col-2'>
            <Button
              className='btn-primary'
              type='button'
              clicked={saveHandler}
              >Add</Button>
          </div>
        </div>
      </Card>

    </div>
  );
}
