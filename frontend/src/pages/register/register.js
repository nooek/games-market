import React, { useState } from "react"
import "./styles.css"
import axios from "axios"

const Register = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const register = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password
    }
    axios.post('http://localhost:3333/api/userr/register', {
      userData: data
    })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.response)
      })
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      register()
    }
  }

  return (
    <div className="register-container">
      <div className="register-forms">
        <div className="first-last-name-fields-container" id="first-last-name-container">
          <div className="first-last-name-field-container">
            <h4 className="first-last-name-category">First Name</h4>
            <input className="first-last-name-input"
              onKeyPress={handleKeyPress}
              placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="first-last-name-field-container">
            <h4 className="first-last-name-category">Last Name</h4>
            <input 
              className="first-last-name-input"
              onKeyPress={handleKeyPress}
              placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
          </div>
        </div>
        <div className="form-field-container" id="username">
          <h4 className="category">Username</h4>
          <input className="fields-input" 
            onKeyPress={handleKeyPress}
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-field-container" id="email">
          <h4 className="category">Email</h4>
          <input onKeyPress={handleKeyPress}
            className="fields-input" 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-field-container" id="password">
          <h4 className="category">Password</h4>
          <input className="fields-input"
            onKeyPress={handleKeyPress}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="register-button" onClick={() => register()}>Register</button>
        <h2 style={{color: "white"}}>{message}</h2>
      </div>
    </div>
  )
}

export default Register;
