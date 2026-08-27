const fs = require('fs');
const path = require('path');
const { getIsConnected } = require('../config/db');
const Appointment = require('../models/Appointment');

const JSON_STORE_PATH = path.join(__dirname, '../data/appointments.json');

// Helper to ensure JSON store exists
const readJsonStore = () => {
  try {
    if (!fs.existsSync(JSON_STORE_PATH)) {
      fs.writeFileSync(JSON_STORE_PATH, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(JSON_STORE_PATH, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading JSON store:', error);
    return [];
  }
};

const writeJsonStore = (appointments) => {
  try {
    fs.writeFileSync(JSON_STORE_PATH, JSON.stringify(appointments, null, 2));
  } catch (error) {
    console.error('Error writing to JSON store:', error);
  }
};

// @desc    Create a new appointment request
// @route   POST /api/appointments
// @access  Public
const createAppointment = async (req, res) => {
  try {
    const {
      patientName,
      phoneNumber,
      email,
      preferredDate,
      preferredTime,
      treatmentConcern,
      preferredDoctor,
      message,
    } = req.body;

    // Validation
    if (!patientName || !phoneNumber || !preferredDate || !treatmentConcern) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: Patient Name, Phone Number, Date, and Treatment Concern.',
      });
    }

    const appointmentPayload = {
      patientName: patientName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email ? email.trim() : '',
      preferredDate,
      preferredTime: preferredTime || 'Morning (08:00 AM - 12:00 PM)',
      treatmentConcern,
      preferredDoctor: preferredDoctor || 'Any Available Specialist',
      message: message ? message.trim() : '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // If MongoDB is connected, save to DB
    if (getIsConnected()) {
      const newAppointment = await Appointment.create(appointmentPayload);
      return res.status(201).json({
        success: true,
        message: 'Appointment request received successfully. Our clinic team will call to confirm your slot.',
        data: newAppointment,
      });
    }

    // Otherwise, store in persistent JSON file
    const appointments = readJsonStore();
    const newEntry = {
      id: `apt_${Date.now()}`,
      ...appointmentPayload,
    };
    appointments.unshift(newEntry);
    writeJsonStore(appointments);

    return res.status(201).json({
      success: true,
      message: 'Appointment request received successfully. Our clinic team will call to confirm your slot.',
      data: newEntry,
    });
  } catch (error) {
    console.error('Create appointment error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while scheduling appointment.',
    });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Public / Staff
const getAppointments = async (req, res) => {
  try {
    if (getIsConnected()) {
      const appointments = await Appointment.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: appointments.length,
        data: appointments,
      });
    }

    const appointments = readJsonStore();
    return res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error('Get appointments error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve appointments.',
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};
