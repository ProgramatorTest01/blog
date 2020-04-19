const express = require("express");
const admin = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../models/Admin");
admin.use(cors());

process.env.SECRET_KEY = "secret";

admin.post("/register", (req, res) => {
  const today = new Date();
  const adminData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  Admin.findOne({
    email: req.body.email
  })
    .then(admin => {
      if (!admin) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          adminData.password = hash;
          Admin.create(adminData)
            .then(admin => {
              res.json({ status: admin.email + " registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

admin.post("/login", (req, res) => {
  Admin.findOne({
    email: req.body.email
  })
    .then(admin => {
      if (admin) {
        if (bcrypt.compareSync(req.body.password, admin.password)) {
          // Passwords match
          const payload = {
            _id: admin._id,
            first_name: admin.first_name,
            last_name: admin.last_name,
            email: admin.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// users.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   Admin.findOne({
//     _id: decoded._id
//   })
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

module.exports = admin;
