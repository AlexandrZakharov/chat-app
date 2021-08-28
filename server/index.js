const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = 5000;

dotenv.config()

require('./models/user');
require('./models/message');
require('./models/conversation');

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/conversations'))
app.use(require('./routes/messages'))
app.use(require('./routes/users'))


mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log('ERROR connecting to MongoDB', err)
})

app.listen(PORT, () => {
  console.log('server is running on', PORT)
})