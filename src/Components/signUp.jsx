import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("https://bloghsapi-roex.onrender.com/students/signUp", {
        name, phone, email, password
      })
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='main'>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Sign Up</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="input_text"
              autoComplete="off"
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="text"
              placeholder="Email"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="number"
              placeholder="Phone number"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder=" Password"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
            <p onClick={submit}>Sign Up</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp;