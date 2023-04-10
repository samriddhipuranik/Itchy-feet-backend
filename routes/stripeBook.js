// const require = require("express");
// const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// router.post("/create-checkout-session", async (req, res) => {
//     try {
//         const {totalAmount, ...bookingData} = req.body;

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     name: bookingData.tourName,
//                     amount: totalAmount * 100,
//                     currency: "inr",
//                     quantity: 1,
//                 },
//             ],
//             success_url: process.env.CLIENT_URL+"/thank-you",
//             cancel_url: process.env.CLIENT_URL+"?success=false",
//         });

//             // For storing the booking data in the database
//             res.status(200).json({session});
        
//     } catch (error) {
//         res.status(500).json({message: "Failed to create checkout session"});
//     }
// })

// module.exports = router;