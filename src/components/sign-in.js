import React, { useState } from "react";
import FormInput from "../components/form-input";
import Button from '../components/button';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          name='email'
          value={email}
          handChangle={handleChange}
          required
        />
        <FormInput
          label='password'
          type='password'
          name='password'
          value={password}
          handChangle={handleChange}
          required
        />
        <Button type='submit' >Sign in</Button>
      </form>
    </div>
  );
};

export default SignIn;
