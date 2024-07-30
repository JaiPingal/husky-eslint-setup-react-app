import React, { useEffect } from 'react';
//eslint local_rules relate secret key relate test variables

// const myApp_KEY = "3g2uhjirkdddd4jht93onn54930";
// const myApp_SECRET_key = "3g2uhjirkdddd4jht93onn54930";
// let myApp2_KEY = process.env.REACT_APP_API_KEY;
const SignupButton = () => {
  useEffect(() => {
    //eslint local_rules relate secret key relate test variables one by one
    // console.log( myApp_KEY);
    // console.log(myApp_SECRET_key);
    // console.log(myApp2_KEY);
  }, [])
  const handleSignup = () => {

    alert('Sign up successful!')
  };

  return (
    <button onClick={handleSignup} className='signup-button'>
      Sign Up
    </button>
  );
};
export default SignupButton;
