import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("URI:", process.env.MONGODB_URI);

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log("✅ MongoDB Connected");
        console.log(conn.connection.host);
    } catch (err) {
        console.error("Connection failed");
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;