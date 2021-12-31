const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "sWeb",
});

app.post('/register', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password === confirmPassword) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
       if (err) {
         console.log(err);
       } else {
        db.query('SELECT username FROM users WHERE username = ?', [username], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            if (result.length === 0) {
              console.log(hash)
              db.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, hash], (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send("Values Inserted");
                };
              })
            } else {
              res.send("Username already exists");
            }
          }
        })
       }
    })
  } else {
    res.send("Passwords do not match");
  }
}); 

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        res.send("Username does not exist");
      } else {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (err) {
            console.log(err);
          } else {
            if (response) {
              res.send("Success");
            } else {
              res.send("Incorrect password");
            }
          }
        })
      }
    }
  })
});

app.listen(3001, () => {
    console.log('Website API is running property.')
})
