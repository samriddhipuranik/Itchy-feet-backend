import Booking from "../models/Booking.js";
import dotenv from "dotenv";
dotenv.config();

import Stripe from "stripe";
import router from "../routes/bookings.js";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// create a booking
export const createBooking = async (req, res) => {
//     const newBooking = new Booking(req.body);
//     try{
//         const savedBooking = await newBooking.save()
//         res.status(200).json({success : true, message : 'Your tour is booked', data: savedBooking})
//     }catch(err){
//         res.status(500).json({success : false, message : 'Internal server error'})
// };
try {
    const {totalAmount, ...bookingData} = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: bookingData.tourName,
              },
              unit_amount: totalAmount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"/thank-you",
        cancel_url: process.env.CLIENT_URL+"?success=false",
      });
        const newBooking = new Booking(bookingData);
        const savedBooking = await newBooking.save();

        // Return the Stripe checkout session
        res.status(200).json({ session, savedBooking });
    
} catch (error) {
    res.status(500).json({message: "Failed to create checkout session", error: error.message, stack: error.stack});
}
}

// get single booking
export const getBooking = async(req, res) => {
   const id = req.params.id;
   try{
    const book = await Booking.findById(id)
    res.status(200).json({success : true, message : 'Successful', data: book,})

   }catch(err){
    res.status(404).json({success : false, message : 'Booking not found'});
   }
}

// get all booking
export const getAllBooking = async(req, res) => {
    try{
     const books = await Booking.find()
     res.status(200).json({success : true, message : 'Successful', data: books,})
 
    }catch(err){
     res.status(500).json({success : false, message : 'Internal Server error'});
    }
 }

//  get all booking by user
export const getAllBookingByUser = async (req, res) => {
  const userId = req.user.id;
  try{
    const bookings = await Booking.find({userId});
    res.status(200).json({success : true, message : 'Successful', data: bookings,})
  } catch(err){
    res.status(500).json({success : false, message : 'Internal Server error'});
  }
}
