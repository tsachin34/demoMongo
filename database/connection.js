//2: connect with database using mongoose
const mongoose= require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mynewDB", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});
