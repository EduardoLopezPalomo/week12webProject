var express = require('express');
var router = express.Router();
var Book = require("../models/book");

router.post('/', async (req, res) => {
    try {
      const { author, name, pages } = req.body;
      const book = new Book({ author, name, pages });
      await book.save();
      res.status(201).json({ message: 'Book saved successfully' });
    } catch (error) {
      console.error('Error saving book:', error);
      res.status(500).json({ message: 'Failed to save book' });
    }
  });

module.exports = router;