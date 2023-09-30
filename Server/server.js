import bodyParser from "body-parser";
import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer';
import * as path from 'path'
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import authRouter from "./APIs/Auth/Auth.js";

dotenv.config();
const server = express();
const port = process.env.PORT || 5000;

server.use(cors({

}))
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/Auth',authRouter); 
const httpServer = server.listen(port, ()=>[
    console.log("listening on port", port)
]);

const DbUri = process.env.DBURI;
//console.log("DB URI IS: FROM process.env.DBURI ->",process.env.DBURI, "And process.env.DbUri",process.env.DbUri)
mongoose.connect(DbUri || process.env.DbUri,
    {
        useNewUrlParser: true,  
    useUnifiedTopology: true
    }
    ).then( ()=>{
        console.log("Connected to database");
    })
.catch((error) => { 
    console.log(error.message);
});
