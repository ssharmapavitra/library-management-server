import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// To establish connection with databases
import Connection from "./database/db.js";
import Routes from "./routes/routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 80;

Connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/books', Routes);
app.listen(PORT,()=> console.log(`Server is running on port : ${PORT}`));