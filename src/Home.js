import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import sacl from "./sacl.png";
import cover2 from "./cover2.jpg";
import it from "./it.jpg";

export default function Home() {
  return (
    <div className="body">
      <div className="header">
        <img src={sacl} className="Sacl" alt="logo" />
        <img src={it} className="it" alt="logo" />
        <img src={cover2} className="background" alt="home" />
        <div className="centered">
          <div className="head">
            <span>HELP DESK</span>
          </div>
          ITES Support
        </div>
        <div className="centered2">
          {/* <Link to="/helpdesk" className="help-link" variant="contained">
            {" "}
            Login{" "}
          </Link> */}
        </div>
      </div>
    </div>
  );
}


