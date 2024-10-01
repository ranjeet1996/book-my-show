import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
// import img from "../../assets/imp.png"
import { useFirebase } from '../../Firebase';


const Login = () => {

    const nevigator = useNavigate();

  const firebase = useFirebase();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
      
      if(firebase.currUser !== null){
        nevigator("/");
      }

      }, [firebase.currUser, nevigator])
   

      const handleLogin = async () =>{
        await  firebase.SigniN( email, password)
            
             nevigator("/");
     }

  return (
    <div className='login'>
            <h1>Welcome To Book My Show</h1>
            <div className='sub-login'>
            {/* <img src={img} alt="" /> */}
            <div className="login-box">
               <h1>Login</h1>
               <div></div>

                <input type="text" placeholder='Enter Your Email' value={email}  onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button onClick={handleLogin} >Login</button>
                <Link to="/signup" >New User?</Link>
            </div>
            </div>
    </div>
  )
}

export default Login