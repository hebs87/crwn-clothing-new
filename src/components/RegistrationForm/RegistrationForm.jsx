import { useState } from 'react';
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

  return (
    <div>
      <h1>
        Sign up with your email and password
      </h1>
      <form
        onSubmit={() => {}}
      >
        <label
          htmlFor='displayName'
        >
          Display Name
        </label>
        <input
          id='displayName'
          onChange={handleChange}
          value={displayName}
          type='text'
          required
        />

        <label
          htmlFor='email'
        >
          Email
        </label>
        <input
          id='email'
          onChange={handleChange}
          value={email}
          type='email'
          required
        />

        <label
          htmlFor='password'
        >
          Password
        </label>
        <input
          id='password'
          onChange={handleChange}
          value={password}
          type='password'
          required
        />

        <label
          htmlFor='confirmPassword'
        >
          ConfirmPassword
        </label>
        <input
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
