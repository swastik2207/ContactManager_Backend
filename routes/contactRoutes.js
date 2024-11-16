const express = require("express");

const { createContact, readContacts, deleteContact, updateContact } = require('../controllers/contactControllers');

const router = express.Router();

router.post('/create-contact', createContact);
router.get('/contacts', readContacts);
router.delete('/delete-contact/:id', deleteContact);
router.put('/update-contact/:id', updateContact);




module.exports =router;