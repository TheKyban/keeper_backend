import app from "./app.js";
import {config} from 'dotenv';
import { CONNECT_DB } from "./data/Database.js";
/**
 * Env configuration
 */

config()


/**
 * Database Connection
 */

CONNECT_DB(process.env.DB_ADDRESS,process.env.DB_NAME)

app.listen(process.env.PORT,()=>{
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}...`)
})