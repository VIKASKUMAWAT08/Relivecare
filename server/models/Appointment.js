const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Patient name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    preferredDate: {
      type: String,
      required: [true, 'Preferred consultation date is required'],
    },
    preferredTime: {
      type: String,
      required: [true, 'Preferred time slot is required'],
      default: 'Morning (08:00 AM - 12:00 PM)',
    },
    treatmentConcern: {
      type: String,
      required: [true, 'Treatment or primary concern is required'],
    },
    preferredDoctor: {
      type: String,
      default: 'Any Available Specialist',
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
