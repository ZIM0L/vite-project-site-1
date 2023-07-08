import React from 'react';
import { Footer_style } from './Footer/Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer_style>
        <footer className="footer">
        <p>&copy; {currentYear} Strona. Wszelkie prawa zastrzeżone.</p>
        <p>Kontakt: random@random.com</p>
        <p>Adres: ul. Przykładowa 123, 00-000 Katowice</p>
        </footer>
    </Footer_style>
  );
}

export default Footer;






