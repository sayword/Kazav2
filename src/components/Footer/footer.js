import './footer.css'
import logo from '../../data/logo_footer.png';

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
    <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;