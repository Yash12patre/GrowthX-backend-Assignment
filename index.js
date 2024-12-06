import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


// Middlewares

app.use(cors());

// Database setup
mongoose.connect(process.env.mongo, {
}).then(() => { console.log("Mongo is also running")});

// Routes Setup

// Listen to Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});