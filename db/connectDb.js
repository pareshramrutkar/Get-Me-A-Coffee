  import mongoose from "mongoose";

  const connectDb = async () => {
      try {
        const conn = await mongoose.connect(`mongodb+srv://amrutkarparesh12:Amrutkar1234@cluster0.ubxup5h.mongodb.net/` , {
          dbName: "coffee",
          useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
    }

  export default connectDb;