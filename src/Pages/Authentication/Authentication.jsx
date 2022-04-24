import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/User.context';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './Authentication.styles.scss';

const Authentication = () => {
  const {currentUser} = useContext(UserContext);

  useEffect(() => {
    // Redirect to home page if user is logged in
    if (currentUser) window.location.href = '/';
  });

  return (
    <div
      className='authentication-container'
    >
      <LoginForm/>
      <RegistrationForm/>
    </div>
  );
};

export default Authentication;
