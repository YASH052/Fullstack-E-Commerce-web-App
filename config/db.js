import Colors from 'colors';
import mongoose from 'mongoose';
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MongoDb Database ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`error in MongoDb ${error}`.bgRed)
    }
}
export default connectDb;