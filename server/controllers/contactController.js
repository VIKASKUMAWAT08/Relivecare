const fs = require('fs');
const path = require('path');
const { getIsConnected } = require('../config/db');
const ContactMessage = require('../models/ContactMessage');

const JSON_STORE_PATH = path.join(__dirname, '../data/messages.json');

const readJsonStore = () => {
  try {
    if (!fs.existsSync(JSON_STORE_PATH)) {
      fs.writeFileSync(JSON_STORE_PATH, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(JSON_STORE_PATH, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading messages JSON store:', error);
    return [];
  }
};

const writeJsonStore = (messages) => {
  try {
    fs.writeFileSync(JSON_STORE_PATH, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error writing messages JSON store:', error);
  }
};

// @desc    Submit a contact message / query
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and Phone number are required.',
      });
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      message: message ? message.trim() : '',
      isResolved: false,
      createdAt: new Date().toISOString(),
    };

    if (getIsConnected()) {
      const saved = await ContactMessage.create(payload);
      return res.status(201).json({
        success: true,
        message: 'Thank you. Your message has been received.',
        data: saved,
      });
    }

    const messages = readJsonStore();
    const newEntry = {
      id: `msg_${Date.now()}`,
      ...payload,
    };
    messages.unshift(newEntry);
    writeJsonStore(messages);

    return res.status(201).json({
      success: true,
      message: 'Thank you. Your message has been received.',
      data: newEntry,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while saving contact message.',
    });
  }
};

module.exports = {
  submitContact,
};
