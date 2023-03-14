import './header.css'
import Logo from '../../data/logo.png';
import Navbar from '../navbar/navbar';

const Header = () => (
  <header className="header">
    <h1>
      <a href="/Kasa" className="logo-link">
        <img src={Logo} alt="kasa, location d'appartements" />
      </a>
    </h1>
    <Navbar />
  </header>
);

export default Header;
