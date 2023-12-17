import React from 'react';
import Add from "../img/addAvatar.png";

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Koodi-Me</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an Account? Register</p>
        </div>
    </div>
  )
}

export default Login;