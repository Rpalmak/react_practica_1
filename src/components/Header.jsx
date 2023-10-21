import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const titleStyle = {
    fontSize: '44px',
  };


  return (
    <header style={headerStyle} className='pt-3 pb-3 mb-5'>
      <h1 style={titleStyle}>Guía Pokemon</h1>
    </header>
  );
}

export default Header;
