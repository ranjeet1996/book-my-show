import React, { useState } from 'react'
import "./Signup.css";
// import img from "../../assets/signup-model-removebg-preview.png"
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../../Firebase';

const Signup = () => {
    const nevigator = useNavigate();

    const firebase = useFirebase();


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
      console.log(email);
      console.log(password);
  
  
  
    const handleClick = async () => {
        await firebase.SignUpUser(email, password);
        
       
        await firebase.signOut(firebase.auth)
        nevigator("/")
  
    }

    return (
        <div className='signup'>
            {/* <img src={img} alt="" /> */}
            <div className="signup-box">
                <h1>Signup</h1>
                <div></div>
                <input type="text" placeholder='Enter Your Username' value={userName} onChange={(e)=> setUserName(e.target.value)}  />
                <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}  />
                <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button onClick={handleClick} >Signup</button>
                <Link to="/" >Already have an Account ?</Link>

            </div>
        </div>
    )
}

export default Signup