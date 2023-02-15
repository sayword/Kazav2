import Logo from '../../data/logo.png';
import Navbar from '../navbar/navbar';

const Header = () => (
  <header className="header">
    <h1>
      <img src={Logo} alt="kasa, location d'appartements" />
    </h1>
    <Navbar />
  </header>
);

export default Header;