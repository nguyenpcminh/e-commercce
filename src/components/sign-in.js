import React, { useState } from "react";
import FormInput from "../components/form-input";
import Button from "../components/button";
import { SignInWithGoogle, auth } from "../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email,password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }

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
        <div className='button'>
          <Button type='submit' onSubmit={handleSubmit}>Sign in</Button>
          <Button onClick={SignInWithGoogle} isGooleSignIN>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
