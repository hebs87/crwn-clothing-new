import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={logGoogleUser}
      >
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default Login;
