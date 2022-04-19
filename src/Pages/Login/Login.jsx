import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const Login = () => {
  const logGoogleUser = async () => {
    // Get the user from the popup
    const {user} = await signInWithGooglePopup();
    // Get existing userDocRef from Firestore, or create one if it does not exist
    const userDocRef = await createUserDocumentFromAuth(user);
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
