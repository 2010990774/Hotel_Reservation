import express from 'express';
import {
    countByCity,
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyTokens.js';

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.post("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);

export default router; 