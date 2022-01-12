const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid").v4;
var isEmpty = require("lodash/isEmpty");
var moment = require("moment");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// My SQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: "pas_distributor",
});

//get staff data
app.get("/staff", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const params = req.body;
    // if have body/query, then get staff data with req id
    if (!isEmpty(params)) {
      connection.query(
        "SELECT * from staff WHERE id = ?",
        [params.id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.send(rows);
          } else {
            console.log(err);
          }
        }
      );
    } else {
      // if dont have body/query, then get all staff data
      connection.query("SELECT * from staff", (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    }
  });
});

//delete existing staff
app.delete("/staff/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE from staff WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Staff ID ${[req.params.id]} has been deleted`);
        } else {
          console.log(err);
        }
      }
    );
  });
});

//insert new staff
app.post("/staff/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const params = req.body;
    const newStaffForDB = {
      id: uuidv4(),
      kode: params.kode,
      nama: params.nama,
      alamat: params.alamat,
      kota: params.kota,
      hp: params.hp,
      tanggallahir: params.tanggallahir,
      agama: params.agama,
      mulaikerja: params.mulaikerja,
      stafftypeid: 6,
      status: 1,
      gajipokok: params.gajipokok,
      insentif: params.insentif,
      tunjangan: params.tunjangan,
      coorid: params.coorid || null,
      supervisorid: params.supervisorid || null,
      creditlimit: params.creditlimit || null,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    };
    const staffObjectKeys = Object.keys(newStaffForDB);
    const staffObjectValues = Object.values(newStaffForDB).map(
      (item) => `'${item}'`
    );
    const staffKeys = staffObjectKeys.join(", ");
    const staffValues = staffObjectValues.join(", ");

    connection.query(
      `INSERT INTO staff (${staffKeys}) VALUES (${staffValues})`,
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Staff ID ${[req.params.id]} has been inserted`);
        } else {
          console.log(err);
        }
      }
    );
  });
});

//update staff
app.put("/staff/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const { id, nama } = req.body;

    connection.query(
      "UPDATE staff SET nama = ? WHERE id = ?",
      [id, nama],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Staff ID ${[req.params.id]} has been deleted`);
        } else {
          console.log(err);
        }
      }
    );
  });
});

//get staff data
app.get("/stafftype", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const params = req.body;
    // if dont have body/query, then get all staff data
    connection.query("SELECT * from stafftype", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// Listen on environment port or 5000
app.listen(port, () => console.log(`listen on port ${port}`));
