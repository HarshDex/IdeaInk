const express = require('express');
const { login, logout, signup, test} = require("../controllers/authController");
const cors = require('cors');

const router = express.Router();

//middlewar e
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
) 

router.get('/',test)

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

module.exports =  router;