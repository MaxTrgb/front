import React from 'react';
import Auth from '../Auth/Auth';
import './Home.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='myHeader'>
      <Link to='/' className='logo'>Denmap</Link>
      <div className='links'>
        <Link to='/'>Games</Link>
        <a href="#contacts">Contacts</a>
        <Link to='/'>Example</Link>
      </div>
      <Auth />
    </header>
  );
};

export default Header;
