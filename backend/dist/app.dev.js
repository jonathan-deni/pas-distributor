"use strict";

var express = require("express");

var mysql = require("mysql");

var cors = require("cors");

var bodyParser = require("body-parser");

var uuidv4 = require("uuid").v4;

var isEmpty = require("lodash/isEmpty");

var moment = require("moment");

var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // My SQL

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: "pas_distributor"
}); //get staff data

app.get("/staff", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var params = req.body; // if have body/query, then get staff data with req id

    if (!isEmpty(params)) {
      connection.query("SELECT * from staff WHERE id = ?", [params.id], function (err, rows) {
        connection.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    } else {
      // if dont have body/query, then get all staff data
      connection.query("SELECT * from staff", function (err, rows) {
        connection.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    }
  });
}); //delete existing staff

app["delete"]("/staff/:id", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query("DELETE from staff WHERE id = ?", [req.params.id], function (err, rows) {
      connection.release();

      if (!err) {
        res.send("Staff ID ".concat([req.params.id], " has been deleted"));
      } else {
        console.log(err);
      }
    });
  });
}); //insert new staff

app.post("/staff/", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var params = req.body;
    var newStaffForDB = {
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
      updated_at: moment().toISOString()
    };
    var staffObjectKeys = Object.keys(newStaffForDB);
    var staffObjectValues = Object.values(newStaffForDB).map(function (item) {
      return "'".concat(item, "'");
    });
    var staffKeys = staffObjectKeys.join(", ");
    var staffValues = staffObjectValues.join(", ");
    connection.query("INSERT INTO staff (".concat(staffKeys, ") VALUES (").concat(staffValues, ")"), function (err, rows) {
      connection.release();

      if (!err) {
        res.send("Staff ID ".concat([req.params.id], " has been inserted"));
      } else {
        console.log(err);
      }
    });
  });
}); //update staff

app.put("/staff/:id", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var _req$body = req.body,
        id = _req$body.id,
        nama = _req$body.nama;
    connection.query("UPDATE staff SET nama = ? WHERE id = ?", [id, nama], function (err, rows) {
      connection.release();

      if (!err) {
        res.send("Staff ID ".concat([req.params.id], " has been deleted"));
      } else {
        console.log(err);
      }
    });
  });
}); //get staff data

app.get("/stafftype", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var params = req.body; // if dont have body/query, then get all staff data

    connection.query("SELECT * from stafftype", function (err, rows) {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
}); // Listen on environment port or 5000

app.listen(port, function () {
  return console.log("listen on port ".concat(port));
});