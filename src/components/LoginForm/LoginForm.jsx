import { useState, useContext } from 'react';
import {
  loginAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { UserContext } from '../../contexts/User.context';
import './LoginForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const {setCurrentUser} = useContext(UserContext);

  const handleChange = e => {
    // Update relevant form field on change
    const {id, value} = e.target;
    setFormFields({
      ...formFields,
      [id]: value,
    });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const {user} = await loginAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password for email');
      }
    }
  };

  const loginWithGoogle = async () => {
    // Get the user from the popup
    const {user} = await signInWithGooglePopup();
    // Get existing userDocRef from Firestore, or create one if it does not exist
    await createUserDocumentFromAuth(user);
  };


  return (
    <div
      className='sign-in-container'
    >
      <h2>Already have an account?</h2>
      <span>
        Log in with your email and password
      </span>
      <form
        onSubmit={handleSubmit}
      >
        <FormInput
          label='Email'
          id='email'
          onChange={handleChange}
          value={email}
          type='email'
          required
        />

        <FormInput
          label='Password'
          id='password'
          onChange={handleChange}
          value={password}
          type='password'
          required
        />

        <div
          className='buttons-container'
        >
          <Button
            type='submit'
          >
            Log In
          </Button>

          <Button
            type='button'
            onClick={loginWithGoogle}
            buttonType='google'
          >
            Google Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
