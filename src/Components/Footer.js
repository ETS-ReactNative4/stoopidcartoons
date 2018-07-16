import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '12px',
        paddingBottom: '20px'
      }}
    >
      © 2018 St00pid Cart00ns. "St00pid Cart00ns" is registered trademark. All
      rights reserved. All other trademarks are the property of their respective
      owners. <br />
      <NavLink to="/privacy" onClick={() => window.scrollTo(0, 0)}>
        <strong
          style={{
            color: '#af1f1f'
          }}
        >
          Privacy Policy and Terms of Service
        </strong>
      </NavLink>
    </div>
  );
};

export default Footer;
