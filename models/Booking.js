import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName : {
        type : String,
        require : true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
        type :Number,
        required : true,
    },
    phone: {
        type :Number,
        required : true,
    },
    bookAt: {
        type :Date,
        required : true,
    },
    photo: {
        type :String,
    },

  },
  { timestamps: true }
);

export default mongoose.model("booking", bookingSchema);
