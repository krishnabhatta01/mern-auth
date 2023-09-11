import express from "express";
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import {errorHandler, notFound} from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(cookieParser());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit:"30mb" }))

// parse application/json
app.use(bodyParser.json({ extended: true, limit:"30mb" }))

connectDB();

app.use('/api/users',userRoute);

if(process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend', 'dist', 'index.html'))
    });
}   else {
    app.get('/', (req, res) => res.send('server is ready'));
};

app.use(notFound);
app.use(errorHandler);


app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})

