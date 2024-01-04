import React from 'react';
import DashboardTitleImage from '../img/dashboard_footer.png';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '15px' }}>
      
      <ul style={{width: '100%', listStyleType: 'none', display: 'flex', justifyContent: 'Center', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <li style={{ margin: '0 20px' }}>About us</li>
        <li style={{ margin: '0 20px' }}>Contact us</li>
        <li style={{ margin: '0 20px' }}>Faq</li>
        <li style={{ margin: '0 20px' }}>Legal</li>
      </ul>
     
    </footer>
  );
};

export default Footer;
