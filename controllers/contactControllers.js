const { z } = require('zod');
const ContactModel = require('../model/Contact'); // Adjust the path if needed

// Zod schema for validation
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required')
    .trim(),
  phone: z
    .string()
    .regex(/^[0-9-]+$/, 'Phone number can only contain numbers and dashes')
    .min(1, 'Phone number is required'),
  company: z.string().trim().optional(),
  jobTitle: z.string().trim().optional(),
});

// Controller for creating a contact
const createContact = async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);

    // Create and save the contact
    const newContact = new ContactModel(validatedData);
    const savedContact = await newContact.save();

    // Send success response
    return res.status(201).json({
      message: 'Contact created successfully',
      contact: savedContact,
    });
  } catch (error) {
    // Handle validation or server errors
    if (error instanceof z.ZodError) {
      // Zod validation error
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    // Server error
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};
 const readContacts = async (req, res) => {
    try {
      const contacts = await ContactModel.find();
  
      res.status(200).json({
        success: true,
        message: "Contacts fetched successfully",
        data: contacts,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
   const deleteContact = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Check if the contact exists
      const contact = await ContactModel.findById(id);
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
  
      // Delete the contact
      await ContactModel.findByIdAndDelete(id);
  
      res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
   const updateContact = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Validate the input
      const validatedData = contactSchema.partial().parse(req.body); // Allow partial updates
  
      // Update the contact
      const updatedContact = await ContactModel.findByIdAndUpdate(id, validatedData, { new: true });
  
      if (!updatedContact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Contact updated successfully",
        data: updatedContact,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      }
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
  
  

module.exports = { createContact ,readContacts,updateContact,deleteContact};
