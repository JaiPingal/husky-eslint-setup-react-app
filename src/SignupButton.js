import React from 'react';

const SignupButton = () => {
  const handleSignup = () => {
    
    alert('Sign up successful!');
  };

  return (
    <button onClick={handleSignup} className='signup-button'>
      Sign Up
    </button>
  );
};
export default SignupButton;