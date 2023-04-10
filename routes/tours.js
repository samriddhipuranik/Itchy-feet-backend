import express  from "express";
import {createTour} from "./../controllers/tourController.js"
import {updateTour} from "./../controllers/tourController.js"
import {deleteTour} from "./../controllers/tourController.js"
import {getSingleTour} from "./../controllers/tourController.js"
import {getAllTour} from "./../controllers/tourController.js"
import {getTourBySearch} from "./../controllers/tourController.js"
import {getFeaturedTour} from "./../controllers/tourController.js"
import {getTourCount} from "./../controllers/tourController.js"
import  { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create new tour
router.post('/', verifyAdmin, createTour);
// update new tour
router.put('/:id', verifyAdmin,updateTour);
// delete new tour
router.delete('/:id',verifyAdmin, deleteTour);
// get single tour
router.get('/:id', getSingleTour);
// get all tour
router.get('/', getAllTour);
// get tour by search
router.get('/search/getTourBySearch', getTourBySearch);
// get featured tours
router.get('/search/getFeaturedTours', getFeaturedTour);
// get tour count
router.get('/search/getTourCount', getTourCount);


export default router;