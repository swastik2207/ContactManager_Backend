const mongoose = require('mongoose');

// Define the schema for a contact
const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regex for email validation
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9-]+$/, // Simple regex to allow numbers and dashes
    },
    company: {
      type: String,
      required: false,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

// Create a Mongoose model
const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;
