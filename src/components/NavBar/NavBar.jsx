import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../static/svgs/crown.svg';
import { UserContext } from '../../contexts/User.context';
import { logoutUser } from '../../utils/firebase/firebase.utils';
import './NavBar.styles.scss';

const NavBar = () => {
  const {currentUser} = useContext(UserContext);

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
          {
            currentUser &&
            <span
              className='nav-link'
              onClick={logoutUser}
            >
              Log out
            </span>
          }
          {
            !currentUser &&
            <Link
              className='nav-link'
              to='/auth'
            >
              Log in
            </Link>
          }
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default NavBar;
