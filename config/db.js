const mongoose = require("mongoose");

module.exports = function connectDb() {

    mongoose.connect(`${process.env.MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      const db = mongoose.connection;
      db.on("error", function (err) {
        console.log(err);
      });
      db.once("open", function () {
        // we're connected!
        console.log("Connected to Database 🚀🚀🚀");
      });
}

