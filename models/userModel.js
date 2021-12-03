const mongoose= require('mongoose');
//3: create a model :

const User = mongoose.model("User", {
    username: {
  
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
  });

module.exports= User;