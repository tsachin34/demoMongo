const mongoose = require("mongoose");

const Vendor = mongoose.model("Vendor", {
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});


module.exports= Vendor;
