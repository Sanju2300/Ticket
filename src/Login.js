// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can implement real authentication logic (e.g., API request)
//     // For now, we'll assume the credentials are correct if both fields are filled

//     if (credentials.username === 'admin' && credentials.password === 'password') {
//       onLogin(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             value={credentials.username}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="form-control"
//             value={credentials.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";

// function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Correct credentials (hardcoded for simplicity)
//   const correctUsername = "admin";
//   const correctPassword = "password";

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Check if username and password are correct
//     if (username === correctUsername && password === correctPassword) {
//       onLogin(true); // Update state in App.js
//     } else {
//       alert("Invalid credentials! Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Login.css";

export default function Login() {
  const [errorMessages, setErrorMessages] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const navigate = useNavigate(); // Use navigate hook to redirect

  const database = [
    {
      username: "admin",
      password: "P@ssw0RD@198#",
    },
    {
      username: "706623",
      password: "S@njay2000",
    },
    {
      username: "601517",
      password: "T@mil1990",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        alert("Logged in Successfully");
        navigate("/calog");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      alert("Username not found");
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="log">
      <div className="logi">
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 300,
              height: 300,
            }}
          >
            <h2 className="h" style={{fontFamily: 'Roboto'}}>Signin</h2>
            <div className="user">
              <TextField
                required
                id="outlined-required"
                label="Required"
                variant="outlined"
                name="uname"
                style={{marginLeft: '40px'}}
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="pass">
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name="pass"
                style={{marginLeft: '40px'}}
              />
              {renderErrorMessage("pass")}
            </div>
            <div className="click">
              <Button type="submit" variant="contained" size="medium" id="login" >
                Login
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );

  return <div>{renderForm}</div>;
}
