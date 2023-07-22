import React, { useState } from 'react'
import "./login.css";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const login = () => {
        axios.post("http://localhost:3000/api/v1/users/login", user).then((res) => {
          alert(res.data.message);
          localStorage.setItem('token', res.data.token);
          // Redirect the user to the appropriate panel based on their role
    
        //   window.location.href = res.data.isAdmin === 'false' ? 'true' : '/admin';
        
        })
          .catch((error) => {
            console.error(error);
            alert(error)
          });
    
      };

  return (
    <div>
      <div className="login-component">
      <div className="card1 card-body">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter your Email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handleChange}
          required
        ></input>
        <div className="button" onClick={login}>
          Login
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login
