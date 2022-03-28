require('dotenv').config()
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./strategies/discordStrategy');

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Routes
const discordRoute = require("./routes/discord");

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: 'userId',
    secret: 'sWeb', // put a strong password, it's too dangerous 
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24
    }
}));

app.use(passport.initialize());
app.use(passport.session());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "sWeb",
});

app.use('/discord', discordRoute);

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

app.get('/login', (req, res) => {
  if (req.session.user) {
    let user = {
      username: req.session.user.username,
      email: req.session.user.email
    }
    res.send({loggedIn: true, user: user});
  } else {
    res.send({loggedIn: false});
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
              req.session.user = result[0]
              res.send(result[0]);
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
