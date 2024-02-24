import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
import loginImg from "../assets/reshot-illustration-social-media-manager-R48ZCSE7KP.png"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/home');
  }
  

  return (
    <div className='signup-component'>
      <div className='left-content'>
        <img src={loginImg} className="loginImg" alt="loginImg" />
      </div>
      <div className='right-content'>
      <form>
        <label>
          Username
         
        </label>
         <input type="text" name="username"  />
        <label>
          Password
         
        </label>
         <input type="password" name="password"  />
         <div className="bot_sign"><div>Don`t have an account?</div><Link to="/signup" className="botlink">SignUp</Link>  </div>
        <button type="submit" onClick={handleLoginClick}>Login</button>
      </form>
      <div>
      <span className="loginForgot">Forgot Password?</span>
      
      </div>
      </div>
    </div>
  );
};

export default Login;
