import React from "react";
import Button from "../components/button";
import FormInput from "../components/form-input";
import { auth, createUserProfile } from "../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>SIGN UP</h2>
        <span>Create your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            placeholder='Display name'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            placeholder='Confirm Pasword'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <Button onSubmit={this.handleSubmit}>SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
