import React from 'react';
import './Hero.css';
import house from './images/house.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
  <div className='hero-container'>
      <div className="hero-left">
            <p>A place where buyers and sellers can meet. Sell your home fast to buyers who are ready to close quickly! Get cash offers instantly!</p>

            <Link to='/start-here'>
            <Button variant='primary'>Start Here</Button>
            </Link>
      </div>

      <div className="hero-right">
            <img src={house} alt="house" />
      </div>

  </div>
  );
};

export default Hero;


