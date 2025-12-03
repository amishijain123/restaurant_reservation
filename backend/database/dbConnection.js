import mongoose from "mongoose"; 

export const dbConnection = () => {
  mongoose              //connecting with mongodb
    .connect(process.env.MONGO_URI, {
      dbName: "restaurant",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
