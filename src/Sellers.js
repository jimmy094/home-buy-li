import React from 'react';
import './Sellers.css'
import CashHand from './images/handscash.png'
import Button from 'react-bootstrap/Button';

const Sellers = () => {
  return (
  <div className='seller-container'>
      <div className="seller-left">
            <p>Are you struggling to pay your mortgage? Do you want to get offers from buyers who are ready to give you cash up front? Please click the button below and we will get you started!</p>
            <Button variant='primary'>Sellers</Button>
      </div>

      <div className="seller-right">
            <img src={CashHand} alt='cash in hands' />
      </div>

  </div>
  );
};

export default Sellers;
