import { connect, connection } from "mongoose";

const connectDB = async () => {
  try {
    if (connection.readyState >= 1) {
      return;
    }
    await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected to ${process.env.MONGODB_URI}`);
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

export default connectDB;
