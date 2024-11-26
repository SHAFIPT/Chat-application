import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db';
import userRoutes from './routers/userRouters'
import chatRoutes from './routers/chatRoutes' 
import { notFound , errorHandler } from './middleware/errorMiddleware';
import 'colors'
import cors from 'cors'

dotenv.config()
const corsOptins = {
    origin : 'http://localhost:5173'
}
const app = express()
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptins));

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)
 
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
})  