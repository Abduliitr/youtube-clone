import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import dotenv from 'dotenv'

import authRouter from './routes/auth.js';
import { videoRouter } from './routes/videoRouter.js'

const app = express();
app.use(express.json());
app.use(cors());

const __dirname = path.resolve()
dotenv.config({path:path.resolve(__dirname , '.env')}) 

const PORT = process.env.PORT || '5001';
// const DBURI = process.env.DBURI || "mongodb://localhost:27017/youtubeclone"
const DBURI = "mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_yourrollnumber"
// mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/

mongoose.connect(DBURI)
.then(() => {console.log("Connected to DB : " + DBURI)})
.catch(error => {
    console.log("Error while connecting to DB", error);
    throw error;
})

app.get('/', (req, res) => {
    return res.send("Hello World!");
})

// Different Routers
app.use(authRouter);
app.use(videoRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})