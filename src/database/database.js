const mongoose = require("mongoose");

const mongooseConnection = mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('Mongoose Connected ;)'));

module.exports = mongooseConnection;