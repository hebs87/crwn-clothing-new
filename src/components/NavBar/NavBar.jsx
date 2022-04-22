import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../static/svgs/crown.svg';
import './NavBar.styles.scss';

const NavBar = () => {
  return (
    <>
      <nav
        className='navigation'
      >
        <Link
          className='logo-container'
          to='/'
        >
          <Logo
            className='logo'
          />
        </Link>
        <div className='nav-links-container'>
          <Link
            className='nav-link'
            to='/shop'
          >
            Shop
          </Link>
          <Link
            className='nav-link'
            to='/auth'
          >
            Log in
          </Link>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default NavBar;
