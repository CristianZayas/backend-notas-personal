import express from 'express';
import * as dotenv from 'dotenv';
import mongodb from '../db/dba';
import router from '../router/router';
import bodyParser from 'body-parser';
import cors from 'cors'
const server = express();
// 
dotenv.config()
mongodb()
//TODO: Middleware
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use('/server', router)
// console.table(process.env.CONNECTION)
export default server

