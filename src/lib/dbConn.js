import mongoose from "mangoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("connected to mongoDB");
    return global.mongoose.conn;
  } else {
    //connect to Mongoose
    const dbURL = process.env.MONGO_URL;
    const promise = mongoose.connect(dbURL, { autoIndex: true });
    global.mongoose = {
      conn: await promise,
      promise: promise,
    };
    return await promise;
  }
}
