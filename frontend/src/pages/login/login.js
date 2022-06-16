import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import "./styles.css"
import axios from "axios"
import { useUserData } from '../../store/userContext';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [redirect, setRedirect] = useState(false)
  const { setUserData } = useUserData()

  const login = async () => {
    const response = await axios.post(`http://localhost:3333/api/user/login`, {
      email: email,
      password: password
    })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
    if (response.data) {
      await setUserData(response.data.data)
      await localStorage.setItem("jwt", response.data.token)
      setRedirect(true);
    }
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      login()
    }
  }

  return(
    <div className="login-container">
      <div className="login-forms">
        <div className="info-input-container">
          <h2 className="category">Email</h2>
          <input 
            className="info-input" 
            onKeyPress={handleKeyPress}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="info-input-container">
          <h2 className="category">Password</h2>
          <input 
            className="info-input"
            onKeyPress={handleKeyPress}
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" onClick={() => login()} >Login</button>
      </div>
      <h2 style={{"color": "white"}}>{message}</h2>
      {redirect ? <Redirect to="/" /> : null}
    </div>
  )
}

export default Login;
