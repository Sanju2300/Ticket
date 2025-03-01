import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import sacl from "./sacl.jpg";
import it1 from "./it1.png";
// import ites from "./ites.png";
import "./Calog.css";

 function Calog({ setReg }) {
    const [formData, setFormData] = React.useState({
      department: " ",
      employee_no: " ",
      raised_by: " ",
      problem: " ",
      remarks: " ",
    });
  
    const setInput = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    console.log("formData", formData);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        if (!formData.employee_no) {
          alert("Please Enter all the Required Fields");
          return false;
        }
        const response = await fetch("/api/submit-ticket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setFormData({
            department: " ",
            employee_no: " ",
            raised_by: " ",
            problem: " ",
            remarks: " ",
          });
          alert("Registration submitted successfully");
          console.log("Registration submitted successfully");
        } else {
          alert("Failed to submit registration");
          console.error("Failed to submit registration");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  return (
    <div className="cat">
      <div class="container-fluid">
        {/* <img src={it1} id="log" alt="logo" /> */}
        <img src={sacl} id="image" alt="logo" />
        {/* <img src={ites} id="ites" alt="logo" /> */}
        <img src={it1} className='img-fluid shadow-4' alt='...' id="it1"  />
        {/* <img src={ites} className='img-fluid shadow-4' alt='...' id="ites"  /> */}
        <div class="row">
          <h2 style={{marginTop: '20px', marginLeft: '500px'}}>ITES SUPPORT</h2>
          <div class="form-group col-3 mt-5">
            <label for="inputState">Department *</label>
            <select id="inputState" class="form-control" required onChange={setInput}>
              <option selected>Choose...</option>
              <option>ADMIN</option>
              <option>CNC-AUDIT</option>
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
              <option>DISA MAINTANENCE</option>
              <option>DESPATCH</option>
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
          <div class="form-group col-3 mt-5">
            <label for="inputState">Employee No</label>
            {/* <select id="inputState" class="form-control" required> */}
              <input
              type="number"
              class="form-control"
              placeholder="Employee No"
              onChange={setInput}
              required
              />
            {/* </select> */}
          </div>
          <div class="form-group col-3 mt-5">
            <label for="inputState">Raised By</label>
            {/* <select id="inputState" class="form-control" required> */}
              <input
              type="text"
              class="form-control"
              placeholder="Raised By"
              onChange={setInput}
              required
              />
            {/* </select> */}
          </div>
          <div class="form-group col-3 mt-5">
            <label for="inputState">Problem</label>
            <select id="inputState" class="form-control" required onChange={setInput}>
              <option selected>Choose...</option>
              <option>Monitor</option>
              <option>Printer</option>
              <option>System</option>
              <option>Scanner</option>
              <option>Laptop</option>
              <option>Keyboard & Mouse</option>
              <option>Mail</option>
              <option>Service Work</option>
              <option>Camera</option>
              <option>Network</option>
              <option>Face Reader</option>
              {/* <option>TV</option>
              <option>TV</option>
              <option>TV</option>
              <option>TV</option> */}
              <option>Others</option>
              
            </select>
          </div>
        </div>

        {/* <div class="row">
          <div class="form-group col-2" id="devices">
            <label>*</label>
            <input
              type="text"
              class="form-control"
              placeholder="Device ID"
              required
            />
          </div>
          <div class="form-group col-2" id="devices">
            <label> Make *</label>
            <input
              type="text"
              class="form-control"
              placeholder="Make"
              required
            />
          </div>
        </div> */}
        <div class="row">
          <label style={{textAlign: 'left'}}>Remarks *</label>
          <textarea
            type="text"
            rows="6"
            placeholder="Problems that occured"
            name="solution"
            style={{width: '35rem'}}
            onChange={setInput}
            required
          />
        </div>
        <button type="submit" 
                  class="btn btn-primary mt-5" 
                  id="button"                 
                  defaultValue="Submit"
                  onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

 
export default Calog;