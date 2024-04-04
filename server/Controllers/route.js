const express = require('express');
const user = require('./User/_routes');

const router = express.Router();

router.use('/user',  user);

module.exports = router