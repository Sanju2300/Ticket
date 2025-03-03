// // import { BrowserRouter, Route, Routes } from "react-router";
// import './App.css';
// import Calog from './Calog.js';
// // import Home from "./Home";

// function App() {
//   return (
//     <div className="App">
//        {/* <BrowserRouter>
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/helpdesk" component={Signin} />
//           <Route exact path="Calog.js" />
//         </Routes>
//       </BrowserRouter> */}
//       < Calog />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Calog from './Calog';
// import Login from './Login';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = (status) => {
//     setIsAuthenticated(status);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/Login" element={<Login onLogin={handleLogin} />} />
//         <Route
//           path="/Calog"
//           element={isAuthenticated ? <Calog /> : <Navigate to="/Login" />}
//         />
//         {/* Add more routes as needed */}
//         <Route path="/" element={<Navigate to="/Login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Calog from './Calog.js';
// import Login from './Login.js';

// function App() {
//   // State to track if the user is logged in
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Function to set the authentication state
//   const handleLogin = (status) => {
//     setIsAuthenticated(status); // Update login status
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Route for Login Page */}
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />

//         {/* Route for Calog Page, accessible only if authenticated */}
//         <Route
//           path="/calog"
//           element={isAuthenticated ? <Calog /> : <Navigate to="/login" />}
//         />
        
//         {/* Redirect any undefined routes to login */}
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Calog from "./Calog.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for Login page */}
        <Route path="/login" element={<Login />} />

        {/* Define the route for Calog page */}
        <Route path="/calog" element={<Calog />} />
        
        {/* Default route, redirect to /login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
