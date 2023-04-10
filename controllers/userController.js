import User from "../models/User.js";

// create new User
export const createTour = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully created",
        data: savedUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updateUser,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// get Single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res
      .status(200)
      .json({ success: true, message: "Successfully got data", data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

// getAll user
export const getAllUser = async (req, res) => {

   
  try {
    const users = await User.find({})

    res.status(200).json({ success: true, message: "Successfully got data", data: users, });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};
