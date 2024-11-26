import express, { Router } from "express";
import { addNewUser, loginUser, allUsers } from "../Controllers/user";
import { protect } from "../middleware/authTokenMiddeware";
const router = express.Router()

router.post('/register',addNewUser)
router.post('/login', loginUser)
router.route('/').get(protect ,allUsers)

export default router