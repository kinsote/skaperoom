// require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')

const moment = require('moment');

const stPg = require('./storage_pg');

let validTokens = {}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(cors());

const BCRYPT_SALT_ROUNDS = 12;

app.post('/registro', function (req, res, next) {
  
  const name = req.body.name;
  const password = req.body.password;
  const birthday = req.body.birthday;
  const email = req.body.email;
  const avatar = req.body.avatar;

  bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
      stPg.saveUser(name, hashedPassword,birthday,email,avatar)
      .then((user)=> {
        console.log('USER SAVED', req.body);
        res.status(201).send(req.body);
      })
      .catch(function(error){
        res.status(400).send(error);        
      });
    })    
    .catch(function(error){
      res.status(400).send();
        console.log("Error saving user: ");
        console.log(error);
        next();
    });
});

app.post('/login', function (req, res, next) { 
  const name = req.body.name;
  const password = req.body.password;
  let id;
  let userData;
  const createToken = () => {    
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  stPg.getUserByname(name)
    .then(function(user) {
      console.log(user);
      userData = user;
      return bcrypt.compare(password, user.password);
    })
    .then(function(samePassword) { 
        if(!samePassword) {
            res.status(403).send();
        }

        let token = createToken();

        validTokens[token] = {
          expires: moment().add(5, 'h'),
          rol: 'user'
        }
        
        delete userData.password;
        res.json({token, userData});
    })
    .catch(function(error){
        console.log("Error authenticating user: ");
        console.log(error);
        res.status(403).send();
        next();
    });
});

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`API disponible en: http://localhost:${port}`)
})
