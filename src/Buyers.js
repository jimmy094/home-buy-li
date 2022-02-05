import React from 'react';
import './Buyers.css'
import Cash from './images/cash.png';
import Button from 'react-bootstrap/Button';
import Pic from './images/pic.png'

const Buyers = () => {
  return (
  <div className='buyer-container'>
        <div className="buyer-left">
            <img src={Pic} alt="cash" width={600}/>
        </div>
        <div className="buyer-right">
            <p>Want to become a verified buyer? Please click the button below to see how you can connect to thousands of people looking to sell their homes ASAP!</p>
            <Button variant='primary'>Buyers</Button>
        </div>
  </div>
  );
};

export default Buyers;
