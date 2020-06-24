import React from 'react';
import SigIn from '../components/sign-in';
import SignUp from '../components/sign-up';


const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SigIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;