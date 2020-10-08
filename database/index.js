const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});

console.log(process.env.DB_USER);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.3k0ax.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('connected'))
  .catch(err => console.log(err));