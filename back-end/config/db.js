const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
      "mongodb+srv://nassim:nassim@cluster0.q37nw.mongodb.net/Nass_X?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }
    )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error bch tetarcheg");
    });
};
module.exports = db_connection;
