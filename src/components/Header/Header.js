import './Header.css';
import Nav from '../Nav/Nav';
import logo from './Logo_EPFL.png';

export default function Header() {
  return (
    <div className='header'>
      <img id='header-logo' src={logo} alt='logo'></img>
      <Nav />
      <p id='language-toggle'>EN / FR</p>
    </div>
  );
}
