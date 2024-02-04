import express from "express";
import { login, logout, signup } from "../controllers/authController";
const cors = require('cors')

const router = express.Router();

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;