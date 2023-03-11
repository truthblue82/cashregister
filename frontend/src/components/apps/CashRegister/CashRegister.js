import React, {useState} from 'react';
//import { ItemAdd } from './ItemAdd';
import { ItemList } from './ItemLists';
import { Payment } from './Payment';
import { Button } from 'components/bases/Button/Button';
import { Card } from 'components/bases/Card/Card';
import { Input } from 'components/bases/Input/Input';
import { Select } from 'components/bases/Select/Select';

export const CashRegister = (props) => {
  const [options, setOptions] = useState([{value: 0, displayValue: "Select product"}, { value:1, displayValue: "product 1" }, {value:2, displayValue: "product 2" }, {value:3, displayValue: "product 3"}]);

  const [selectedVal, setSelectedVal] = useState(0);
  const [item, setItem] = useState({id: '', name: '', price: "", quantity: ""});

  const [receiveCash, setReceiveCash] = useState(0);
  const [returnCash, setReturnCash] = useState(0);

  //const products = [];
  const initProd = [{ id: 1, name: "product 1", price: 13, quantity: 2 }, { id: 2, name: "product 2", price: 15, quantity: 1 }, { id: 3, name: "product 3", price: 9, quantity: 3 }]

  const [products, setProducts] = useState(initProd);

  const onAddItemChange = (evt) => {
    if (evt.target.name === 'name') {
      //const tmp = options.filter(item => item.value === evt.target.value);
      setItem({
        ...item,
        [evt.target.name]: evt.target.value,
        name: evt.target.data("name")
      });
      setSelectedVal(evt.target.value);
    } else {
      setItem({
        ...item,
        [evt.target.name]: evt.target.value
      });
    }
  }

  const addHandler = () => {
    //add item into list
    console.log('save', item);
    setProducts(prev => prev.push(item));

    setSelectedVal(0);
    setItem({ id: '', name: '', price: "", quantity: "" });
  }



  return (
    <>
      <div className='form col-12'>
        <Card>
          <h1 className='float-left'>Item</h1>
          <div className='row'>
            <div className='col-4'>
              <Select
                id='id'
                name='id'
                data-name={selectedVal}
                floating={true}
                value={selectedVal}
                changed={onAddItemChange}
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
                changed={onAddItemChange}
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
                changed={onAddItemChange}
              />
            </div>
            <div className='col-2'>
              <Button
                className='btn-primary'
                type='button'
                clicked={addHandler}
                >Add</Button>
            </div>
          </div>
        </Card>

      </div>

      <div className='form col-12'>
        <Card>
          <div className='row'>
            <div className='col-4'>
              <Input
                type="number"
                name="receive"
                id="receive"
                floating={true}
                value={receiveCash}
                label='Received Cash'
                //changed={}
              />
            </div>
            <div className='col-3'>
              <Input
                type="number"
                name="total"
                id="total"
                floating={true}
                value=""
                label='Total price'
                disabled={true}
                //changed={}
              />
            </div>
            <div className='col-3'>
              <Input
                type="number"
                name="return"
                id="return"
                floating={true}
                value={returnCash}
                label='Returned Cash'
                //changed={}
              />
            </div>
            <div className='col-2'>
              <Button
                className='btn-primary'
                type='button'
                //clicked={saveHandler}
                >Submit</Button>
            </div>
          </div>
        </Card>
      </div>
      {
        products && products.length > 0 && <ItemList data={products} />
      }

      <div className='row'>
        <div className='col-10'></div>
        <div className='col-2'>
          <Button
            className='btn-outline-primary'
            type='button'
            disable={true}
              //clicked={saveHandler}
          >Print Invoice</Button>
        </div>
      </div>
    </>
  );
}
