import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
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
      const userDocRef = await createUserDocumentFromAuth(user, {displayName});
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
    <div>
      <h1>
        Sign up with your email and password
      </h1>
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

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
