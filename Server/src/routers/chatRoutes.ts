import { protect } from './../middleware/authTokenMiddeware';
import express from 'express'

const router = express.Router()


router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').post(protect, createGroupChat);

export default router
