import express from "express";
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import {errorHandler, notFound} from './middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use('/api/users',userRoute)
app.use(notFound);
app.use(errorHandler);


app.get('/',(req,res) => {
    res.send('hello world')
})


app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})

