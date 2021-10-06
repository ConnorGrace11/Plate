const express = require('express');
const router = express.Router();
const middleware = require("../middlewares/middleware.upload");

router.post('/upload', middleware.single('file'), (req, res) => {
    res.json({ file: req.file });
  });

module.exports = router;
