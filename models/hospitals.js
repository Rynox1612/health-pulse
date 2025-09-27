const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String },
    pincode: { type: String },
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
  },
  specialization: [
    {
      type: String,
    },
  ],
  capacity: {
    totalBeds: { type: Number, default: 0 },
    availableBeds: { type: Number, default: 0 },
  },
  emergencyAvailable: {
    type: Boolean,
    default: false,
  },
});

const Hospital = new mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
