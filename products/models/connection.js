const mongoose = require("mongoose");
const { mongodb_uri } = require("../config");
getConnection = async () => {
  try {
    await mongoose.connect(mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Customer DB connected!");
  } catch (error) {
    console.log("Customer DB connection failed");
  }
};
getConnection();
