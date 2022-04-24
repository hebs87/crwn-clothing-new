import { useState } from 'react';
import {
  loginAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './LoginForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const handleChange = e => {
    // Update relevant form field on change
    const {name, value} = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await loginAuthUserWithEmailAndPassword(email, password);
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
    await signInWithGooglePopup();
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
          name='email'
          onChange={handleChange}
          value={email}
          type='email'
          required
        />

        <FormInput
          label='Password'
          id='password'
          name='password'
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
