const express = require("express");
const sql = require("mssql");
const app = express();
const cors = require("cors");

const config = {
  user: "sa",
  password: "Sakthi@123",
  server: "ZZSLSYSEDP00781",
  database: "Ites",
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

app.get("/api/get-system", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_devicestype`);
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

app.put("/api/update-system/:devicetype", async (req, res) => {
  try {
    await sql.connect(config);
    const { devicetype } = req.params;
    const updatedRow = req.body;

    const request = new sql.Request();
    const query = `UPDATE m_devicestype SET devicedescr = @devicedescr, devicelast_Serial = @devicelast_Serial, devicestatus = @devicestatus WHERE devicetype = @devicetype`;

    request.input("devicetype", devicetype);
    request.input("devicedescr", updatedRow.devicedescr);
    request.input("devicelast_Serial", updatedRow.devicelast_Serial);
    request.input("devicestatus", updatedRow.devicestatus);

    await request.query(query);

    res.status(200).json({ message: "System updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update department" });
  }
});

//Post method to push the details which are entered through the text field
app.post("/api/submit-system", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { devicetype, devicedescr, devicelast_Serial, devicestatus } =
      req.body;

    const query = `
        INSERT INTO m_devicestype ( devicetype, devicedescr, devicelast_Serial, devicestatus )
        VALUES ( @devicetype, @devicedescr, @devicelast_Serial, @devicestatus );
        `;

    await pool
      .request()
      .input("devicetype", sql.NVarChar, devicetype)
      .input("devicedescr", sql.NVarChar, devicedescr)
      .input("devicelast_Serial", sql.Numeric, devicelast_Serial)
      .input("devicestatus", sql.NVarChar, devicestatus)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//--------------------------------------------------------------Department Details---------------------------------------------------------------------------------//
//Get method to display in the webpage

app.get("/api/get-department", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_department`);
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

app.put("/api/update-department/:deptid", async (req, res) => {
  try {
    await sql.connect(config);
    const { deptid } = req.params;
    const updatedRow = req.body;

    const request = new sql.Request();
    const query = `UPDATE m_department SET deptdescr = @deptdescr, deptcode = @deptcode, deptstatus = @deptstatus WHERE deptid = @deptid`;

    request.input("deptid", deptid);
    request.input("deptdescr", updatedRow.deptdescr);
    request.input("deptcode", updatedRow.deptcode);
    request.input("deptstatus", updatedRow.deptstatus);

    await request.query(query);

    res.status(200).json({ message: "Department updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update department" });
  }
});

//Post method to push the details which are entered through the text field
app.post("/api/submit-department", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { deptid, deptdescr, deptcode, deptstatus } = req.body;

    const query = `
        INSERT INTO m_department ( deptid, deptdescr, deptcode, deptstatus )
        VALUES ( @deptid, @deptdescr, @deptcode, @deptstatus );
        `;

    await pool
      .request()
      .input("deptid", sql.Numeric, deptid)
      .input("deptdescr", sql.NVarChar, deptdescr)
      .input("deptcode", sql.NVarChar, deptcode)
      .input("deptstatus", sql.NVarChar, deptstatus)
      .query(query);
    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//--------------------------------------------------------------Makes Details-------------------------------------------------------------------------------//
//Get method to display in the webpage

app.get("/api/get-makes", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_make`);
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

app.put("/api/update-makes/:makecd", async (req, res) => {
  try {
    await sql.connect(config);
    const { makecd } = req.params;
    const updatedRow = req.body;

    const request = new sql.Request();
    const query = `UPDATE m_make SET makeDescr = @makeDescr WHERE makecd = @makecd`;

    request.input("makecd", makecd);
    request.input("makeDescr", updatedRow.makeDescr);

    await request.query(query);

    res.status(200).json({ message: "Makes updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update department" });
  }
});

//Post method to push the details which are entered through the text field
app.post("/api/submit-makes", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { makecd, makeDescr } = req.body;

    const query = `
        INSERT INTO m_make ( makecd, makeDescr )
        VALUES ( @makecd, @makeDescr );
        `;

    await pool
      .request()
      .input("makecd", sql.NVarChar, makecd)
      .input("makeDescr", sql.NVarChar, makeDescr)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//--------------------------------------------------------------Employee Details--------------------------------------------------------------------------------//
//Get method to display in the webpage
app.get("/api/get-employee", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_employee`);
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

//update api for employdetails

app.put("/api/update-employee/:empno", async (req, res) => {
  try {
    await sql.connect(config);
    const { empno } = req.params;
    const updatedRow = req.body;

    const request = new sql.Request();
    const query = `UPDATE m_employee SET ename = @ename, deptid = @deptid, estatus = @estatus WHERE empno = @empno`;

    request.input("empno", empno);
    request.input("ename", updatedRow.ename);
    request.input("deptid", updatedRow.deptid);
    request.input("estatus", updatedRow.estatus);

    await request.query(query);

    res.status(200).json({ message: "Details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update department" });
  }
});

//Post method to push the details which are entered through the text field
app.post("/api/submit-employee", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { empno, ename, deptid, estatus } = req.body;

    const query = `
        INSERT INTO m_employee ( empno, ename, deptid, estatus )
        VALUES ( @empno, @ename, @deptid, @estatus );
        `;

    await pool
      .request()
      .input("empno", sql.Numeric, empno)
      .input("ename", sql.NVarChar, ename)
      .input("deptid", sql.Numeric, deptid)
      .input("estatus", sql.NVarChar, estatus)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//--------------------------------------------------------------Software Details-------------------------------------------------------------------------------//

//Get method to display in the webpage
app.get("/api/get-software", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM m_software`);
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

app.put("/api/update-software/:softcd", async (req, res) => {
  try {
    await sql.connect(config);
    const { softcd } = req.params;
    const updatedRow = req.body;

    const request = new sql.Request();
    const query = `UPDATE m_software SET softdescr = @softdescr, softtype = @softtype, softstatus = @softstatus WHERE softcd = @softcd`;

    request.input("softcd", softcd);
    request.input("softdescr", updatedRow.softdescr);
    request.input("softtype", updatedRow.softtype);
    request.input("softstatus", updatedRow.softstatus);

    await request.query(query);

    res.status(200).json({ message: "Details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update department" });
  }
});

//Post method to push the details which are entered through the text field
app.post("/api/submit-software", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const { softcd, softdescr, softtype, softstatus } = req.body;

    const query = `
        INSERT INTO m_software ( softcd, softdescr, softtype, softstatus )
        VALUES ( @softcd, @softdescr, @softtype, @softstatus );
        `;

    await pool
      .request()
      .input("softcd", sql.NVarChar, softcd)
      .input("softdescr", sql.NVarChar, softdescr)
      .input("softtype", sql.NVarChar, softtype)
      .input("softstatus", sql.NVarChar, softstatus)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------\\
app.get("/api/get-asset", async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();
    const result = await request.query(`SELECT * FROM t_hardware`);
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

app.post("/api/submit-asset", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const {
      hardwareid,
      Locationcd,
      devicetype,
      deptcode,
      Assetserial,
      Assetcode,
      itcode,
      suplcd,
      supl_invno,
      sup_invdt,
      sup_invamt,
      inst_date,
      user_deptid,
      user_empno,
      hw_makecd,
      hw_model,
      hw_serial,
      hw_hdd_type,
      hw_hdd_size,
      hw_processor,
      hw_ramtype,
      hw_ram,
      disp_assetcode,
      disp_makecd,
      disp_model,
      disp_type,
      disp_size,
      disp_serial,
      os_type,
      os_softcd,
      os_serial,
      off_type,
      off_softcd,
      off_serial,
      domain_nm,
      usage_type,
      network,
      network_ip,
      nw_machid,
      Label_print,
    } = req.body;


    const query = `
        INSERT INTO t_hardware ( hardwareid, Locationcd, devicetype, deptcode, Assetserial, Assetcode, itcode, suplcd, supl_invno, 
            sup_invdt, sup_invamt, inst_date, user_deptid, user_empno, hw_makecd, hw_model, hw_serial, hw_hdd_type, hw_hdd_size, 
            hw_processor, hw_ramtype, hw_ram, disp_assetcode, disp_makecd, disp_model, disp_type, disp_size, disp_serial, os_type, 
            os_softcd, os_serial, off_type, off_softcd, off_serial, domain_nm, usage_type, network, network_ip, nw_machid, Label_print )
        VALUES ( @hardwareid,  @Locationcd, @devicetype, @deptcode, @Assetserial, @Assetcode, @itcode, @suplcd, @supl_invno, 
            @sup_invdt, @sup_invamt, @inst_date, @user_deptid, @user_empno, @hw_makecd, @hw_model, @hw_serial, @hw_hdd_type, @hw_hdd_size, 
            @hw_processor, @hw_ramtype, @hw_ram, @disp_assetcode, @disp_makecd, @disp_model, @disp_type, @disp_size, @disp_serial, @os_type, 
            @os_softcd, @os_serial, @off_type, @off_softcd, @off_serial, @domain_nm, @usage_type, @network, @network_ip, @nw_machid, @Label_print );
        `;

    await pool
      .request()
      .input("hardwareid", sql.Int, hardwareid)
      .input("Locationcd", sql.NVarChar, Locationcd)
      .input("devicetype", sql.NVarChar, devicetype)
      .input("deptcode", sql.NVarChar, deptcode)
      .input("Assetserial", sql.Numeric, Assetserial)
      .input("Assetcode", sql.NVarChar, Assetcode)
      .input("itcode", sql.NVarChar, itcode)

      .input("suplcd", sql.NVarChar, suplcd)
      .input("supl_invno", sql.NVarChar, supl_invno)
      .input("sup_invdt", sql.Date, sup_invdt)
      .input("sup_invamt", sql.Numeric, sup_invamt)

      .input("inst_date", sql.Date, inst_date)
      .input("user_deptid", sql.Numeric, user_deptid)
      .input("user_empno", sql.Numeric, user_empno)

      .input("hw_makecd", sql.NVarChar, hw_makecd)
      .input("hw_model", sql.NVarChar, hw_model)
      .input("hw_serial", sql.NVarChar, hw_serial)
      .input("hw_hdd_type", sql.NVarChar, hw_hdd_type)
      .input("hw_hdd_size", sql.Numeric, hw_hdd_size)
      .input("hw_processor", sql.NVarChar, hw_processor)
      .input("hw_ramtype", sql.NVarChar, hw_ramtype)
      .input("hw_ram", sql.NVarChar, hw_ram)

      .input("disp_assetcode", sql.NVarChar, disp_assetcode)
      .input("disp_makecd", sql.NVarChar, disp_makecd)
      .input("disp_model", sql.NVarChar, disp_model)
      .input("disp_type", sql.NVarChar, disp_type)
      .input("disp_size", sql.Numeric, disp_size)
      .input("disp_serial", sql.NVarChar, disp_serial)

      .input("os_type", sql.NVarChar, os_type)
      .input("os_softcd", sql.NVarChar, os_softcd)
      .input("os_serial", sql.NVarChar, os_serial)

      .input("off_type", sql.NVarChar, off_type)
      .input("off_softcd", sql.NVarChar, off_softcd)
      .input("off_serial", sql.NVarChar, off_serial)

      .input("domain_nm", sql.NVarChar, domain_nm)
      .input("usage_type", sql.NVarChar, usage_type)

      .input("network", sql.NVarChar, network)
      .input("network_ip", sql.NVarChar, network_ip)
      .input("nw_machid", sql.NVarChar, nw_machid)
      .input("Label_print", sql.NVarChar, Label_print)
      .query(query);

    res.sendStatus(200);
  } catch (error) {
    console.error("An error occured:", error);
    res.status(500).send("Server error");
  }
});

//Port declaration below
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
