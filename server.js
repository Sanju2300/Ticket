const express = require("express");
const sql = require("mssql");
const app = express();
const cors = require("cors");

const config = {
  user: "sa",
  password: "Sakthi@123",
  server: "ZZSLSYSEDP00781",
  database: "Ticketing",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
  },
  port: 1433,
};

app.use(express.json());

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

//Get method to display in the webpage

app.get("/api/get-ticket", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_ticketdetails`);
    const dataWithId = result.recordset.map((record, index) => ({
      id: index + 1,
      ...record,
    }));
    res.json(dataWithId);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retriving data from the database");
  }
});

// app.put("/api/update-system/:devicetype", async (req, res) => {
//   try {
//     await sql.connect(config);
//     const { devicetype } = req.params;
//     const updatedRow = req.body;

//     const request = new sql.Request();
//     const query = `UPDATE m_devicestype SET devicedescr = @devicedescr, devicelast_Serial = @devicelast_Serial, devicestatus = @devicestatus WHERE devicetype = @devicetype`;

//     request.input("devicetype", devicetype);
//     request.input("devicedescr", updatedRow.devicedescr);
//     request.input("devicelast_Serial", updatedRow.devicelast_Serial);
//     request.input("devicestatus", updatedRow.devicestatus);

//     await request.query(query);

//     res.status(200).json({ message: "System updated successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update department" });
//   }
// });

//Post method to push the details which are entered through the text field

app.post("/api/submit-ticket", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { department, employee_no, raised_by, problem, remarks } =
      req.body;

    const query = `
        INSERT INTO m_ticketdetails ( department, employee_no, raised_by, problem, remarks )
        VALUES ( @department, @employee_no, @raised_by, @problem, @remarks );
        `;

    await pool
      .request()
      .input("department", sql.NVarChar, department)
      .input("employee_no", sql.Int, employee_no)
      .input("raised_by", sql.NVarChar, raised_by)
      .input("problem", sql.NVarChar, problem)
      .input("remarks", sql.NVarChar, remarks)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//Port declaration below
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
