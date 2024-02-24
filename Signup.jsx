import React from 'react';
import loginImg from "../assets/reshot-illustration-social-media-manager-R48ZCSE7KP.png"
import './styles.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('/');
  };

 

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
        <input type="text" name="username" required />
        
        <label>
          Email
        </label>
        <input type="email" name="email" required />
        
        <label>
          Password
        </label>
        <input type="password" name="password" required />
        <div className="bot_sign">
          <span>Already have account ?</span>
          <Link to="/login" className="botlink">Login</Link>
        </div>
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
