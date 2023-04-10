import express from 'express';
import { createBooking, getBooking, getAllBooking, getAllBookingByUser} from '../controllers/bookingController.js';
import { verifyUser, verifyAdmin, verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/', verifyUser, createBooking)
router.get('/user', verifyUser, getAllBookingByUser);
router.get('/:id', verifyUser,getBooking );
router.get('/', verifyAdmin,getAllBooking );



export default router;