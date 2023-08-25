import express from "express";
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import {errorHandler, notFound} from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
connectDB();

app.use('/api/users',userRoute)
app.use(notFound);
app.use(errorHandler);


app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})

