import mongoose from "mongoose";

const mongoConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "blogging",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Error connecting to database : " + err);
    });
};

export default mongoConnection;
