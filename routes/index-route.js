const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.send({ response: 'I work!' }).status(200);
});

module.exports = indexRouter;