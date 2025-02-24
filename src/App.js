// import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import Calog from './Calog.js';
// import Home from "./Home";

function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/helpdesk" component={Signin} />
          <Route exact path="Calog.js" />
        </Routes>
      </BrowserRouter> */}
      < Calog />
    </div>
  );
}

export default App;
