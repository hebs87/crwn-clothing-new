import { useState, useContext } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/User.context';
import './RegistrationForm.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
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

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation error', error.message);
      }
    }
  };

  return (
    <div
      className='sign-up-container'
    >
      <h2>Don't have an account?</h2>
      <span>
        Sign up with your email and password
      </span>
      <form
        onSubmit={handleSubmit}
      >
        <FormInput
          label='Display Name'
          id='displayName'
          onChange={handleChange}
          value={displayName}
          type='text'
          required
        />

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

        <FormInput
          label='Confirm Password'
          id='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
          type='password'
          required
        />

        <Button
          type='submit'
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
