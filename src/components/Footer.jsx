import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: 'auto',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Mi Sitio Web</p>
      <nav>
        <a href="/" style={linkStyle}>Inicio</a> |{' '}
        <a href="/acerca-de" style={linkStyle}>Acerca de</a> |{' '}
        <a href="/contacto" style={linkStyle}>Contacto</a>
      </nav>
    </footer>
  );
}

export default Footer;
