import { protect } from './../middleware/authTokenMiddeware';
import { accessChat } from '../Controllers/chatControllers';
import express from 'express'

const router = express.Router()


router.route('/').post(protect, accessChat);
// router.route('/').get(protect, fetchChats);
// router.route('/group').post(protect, createGroupChat);
// router.route('/rename').put(protect, renameGroup);
// router.route('/groupremove').put(protect, removeFromGroup);
// router.route('/groupadd').put(protect, addGroup);

export default router
