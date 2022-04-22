import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './Authentication.styles.scss';

const Authentication = () => {

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
