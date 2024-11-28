import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <header className='header center'>
    <h3>
      <a href="https://your-website.com" className='link'>
        Atharv Maske
      </a>
    </h3>
    <Navbar />
  </header>
);

export default Header;
