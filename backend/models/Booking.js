const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  packageType: { type: String, required: true },
  washingPoint: { type: String, required: true },
  fullName: { type: String, required: true },
  mobileNo: { type: String, required: true },
  washDate: { type: Date, required: true },
  washTime: { type: String, required: true },
  message: { type: String, default: "" },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Booking", bookingSchema);
