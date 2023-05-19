import express from 'express';
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyTokens.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("Hello User, You Are Logged IN");
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("Hello User, You Are Logged In And You Can Delete Your Account");
})

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send("Hello Admin, You Are Logged In And You Can Delete All Account");
})

// UPDATE
router.post("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);


export default router;