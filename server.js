import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import ProductRoutes from './routes/productRoutes.js'
import cors from 'cors'

// config
dotenv.config();

connectDb();
// rest object

const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', ProductRoutes)


// rest apis
app.get('/', (req, res) => {
    res.send("<h1>welcome to ecommerce app</h1>")
})

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT} and on ${process.env.DEV_MODE} mode`.bgCyan)
})