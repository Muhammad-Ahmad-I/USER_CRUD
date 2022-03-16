const express = require('express');
const cors = require('cors');
const Route = require('./routes/TaskRoutes.js');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
bodyParser.urlencoded({ extended: true });
app.use('/api', Route);

app.listen(5000, (req, res) => {
  console.log('server start on port 5000');
});
