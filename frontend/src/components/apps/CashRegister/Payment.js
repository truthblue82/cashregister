import React, {useState} from 'react';
import { Button } from 'components/bases/Button/Button';
import { Card } from 'components/bases/Card/Card';
import { Input } from 'components/bases/Input/Input';

export const Payment = (props) => {
  const [receiveCash, setReceiveCash] = useState(0);
  const [returnCash, setReturnCash] = useState(0);

  return (
    <div className='form col-12'>
      <Card>
        <div className='row'>
          <div className='col-3'>
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
          <div className='col-1'><span>-</span></div>
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
  );
}
