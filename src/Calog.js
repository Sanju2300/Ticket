import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import sacl from "./sacl.png";
import it1 from "./it1.png";
import ites from "./ites.png";
import "./Calog.css";

export default function Calog() {
  return (
    <div className="cat">
      <div class="container-fluid">
        <img src={it1} id="log" alt="logo" />
        {/* <img src={sacl} id="image" alt="logo" /> */}
        <img src={ites} id="ites" alt="logo" />
        <div class="row">
          <h2>ITES SUPPORT</h2>
          <div class="form-group col-6">
            <label for="inputState">Department *</label>
            <select id="inputState" class="form-control" required>
              <option selected>Choose...</option>
              <option>ADMIN</option>
              <option>AUDIT-CNC</option>
              <option>ACCOUNTS</option>
              <option>CAE</option>
              <option>CNC-DESIGN</option>
              <option>CNC-MAINTANENCE</option>
              <option>CNC-PROD</option>
              <option>CNC-QA</option>
              <option>CNC-QC</option>
              <option>CNC-STORE</option>
              <option>CIVIL</option>
              <option>CANTEEN</option>
              <option>DATAPRO</option>
              <option>DISA-QC</option>
              <option>DISPATCH</option>
              <option>ENTRYROOM</option>
              <option>FETTLING-DISPATCH</option>
              <option>FETTLING-QA</option>
              <option>HR & TEAM</option>
              <option>ITES</option>
              <option>ITES-DATAPRO</option>
              <option>LABELLING</option>
              <option>MS-1 QC</option>
              <option>MS-1 PACKING</option>
              <option>MAIN STORE</option>
              <option>MAINTANENCE</option>
              <option>MARKETING</option>
              <option>MATERIAL GATE</option>
              <option>METROLOGY</option>
              <option>MICROLAB</option>
              <option>NPD_MACHINESHOP</option>
              <option>PLANNING</option>
              <option>PRODUCT TESTING</option>
              <option>REJECTION</option>
              <option>SAFETY</option>
              <option>SAND LAB</option>
              <option>SPECIAL PROCESS</option>
              <option>TIME OFFICE</option>
              <option>TOOLING</option>
              <option>VAE</option>
              <option>WEIGHBRIDGE</option>
              <option>WAREHOUSE</option>
              <option>X-RAY</option>
              <option>SS-NEW POWERHOUSE</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label for="inputState"></label>
            <select id="inputState" class="form-control" required>
              <option selected>Choose...</option>
              <option>DESKTOP</option>
              <option>PRINTER</option>
              <option>CPU</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="form-group col-6" id="devices">
            <label>Serial No *</label>
            <input
              type="text"
              class="form-control"
              placeholder="Device ID"
              required
            />
          </div>
          <div class="form-group col-6" id="devices">
            <label>Model & Make *</label>
            <input
              type="text"
              class="form-control"
              placeholder="Model No"
              required
            />
          </div>
        </div>

        <div class="row">
          <label>Problem *</label>
          <textarea
            type="text"
            rows="6"
            placeholder="Problems that occured"
            name="solution"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary mt-5" id="button">
          Submit
        </button>
      </div>
    </div>
  );
}

 
