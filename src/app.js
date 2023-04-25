import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js'
import taskRouter from './routes/task.routes.js'
import cookieParser from 'cookie-parser'



const app = express()

/**
 * App uses
 */
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods:["POST","GET","PUT","DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/",(req,res)=>res.send("Api working"))


/**
 * User Router
 */
app.use("/user",userRouter)


/**
 * Task Router
 */

app.use("/task",taskRouter)


export default app;