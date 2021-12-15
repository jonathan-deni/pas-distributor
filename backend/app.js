const express = require('express');
const mysql = require('mysql');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// My SQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'jonathan_deni',
    password: 'P@ssw0rd123',
    database: 'pas_distributor'
})

//get all staff
app.get('/staff', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * from staff', (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        });
    })
});

//get staff by id
app.get('/staff/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * from staff WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release();
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        });
    })
});

//delete existing staff
app.delete('/staff/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('DELETE from staff WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release();
            if(!err) {
                res.send(`Staff ID ${[req.params.id]} has been deleted`)
            } else {
                console.log(err)
            }
        });
    })
});

//insert new staff
app.post('/staff/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        const params = req.body

        connection.query('INSERT INTO staff SET ?', params, (err, rows) => {
            connection.release();
            if(!err) {
                res.send(`Staff ID ${[req.params.id]} has been deleted`)
            } else {
                console.log(err)
            }
        });
    })
});

//update staff
app.put('/staff/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        const { id, nama } = req.body

        connection.query('UPDATE staff SET nama = ? WHERE id = ?', [id, nama], (err, rows) => {
            connection.release();
            if(!err) {
                res.send(`Staff ID ${[req.params.id]} has been deleted`)
            } else {
                console.log(err)
            }
        });
    })
});

// Listen on environment port or 5000
app.listen(port, 
    () => console.log(`listen on port ${port}`)
);