const mongoose = require("mongoose");

const url =
  "mongodb://Mangala:Mangala@cluster0-shard-00-00.nmgb9.mongodb.net:27017,cluster0-shard-00-01.nmgb9.mongodb.net:27017,cluster0-shard-00-02.nmgb9.mongodb.net:27017/quoraclone?ssl=true&replicaSet=atlas-1147t5-shard-0&authSource=admin&retryWrites=true&w=majority"
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
