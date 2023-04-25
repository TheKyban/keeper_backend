import USER from "../models/user.model.js"
import { Cookie } from "../utils/Cookie.js"
import { Message } from "../utils/message.js"
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt'


/**
 * Register new User
 */
export const CreateNewUser = async (req, res) => {
    try {

        /**
         * Getting data from requested body
         */

        const { fName, lName, email, password } = req.body

        /**
         * Checking user already exist or not
         */

        const isExist = await USER.findOne({ email })

        if (isExist) {
            return res.status(400).json(Message(false, "User already Exist", null))
        }


        /**
         * bcrypt
         */

        const encryptedPass = await bcrypt.hash(password,10)
        /**
         * IF USER not exist(means new user)
         */

        const registerNewUser = await USER.create({ firstName: fName, lastName: lName, email: email, password: encryptedPass })

        return res.status(201).json(Message(true, "user Created", null))

    } catch (error) {
        console.log(error)
    }
}


/**
 * Login user
 */

export const Login = async (req, res) => {
    try {
        /**
         * Getting data from request body
         */
        const { email, password } = req.body;

        /**
         * Checking user exist or not
         */

        const isExist = await USER.findOne({ email })

        /**
         * If not exist
         */

        if (!isExist) {
            return res.status(401).json(Message(false, "User not exist", null))
        }

        /**
         * If user exist
         */
        const isMatch = await bcrypt.compare(password,isExist.password)


        /**
         * JWT token
         */

        const jwt = JWT.sign({token:isExist._id},process.env.MY_SECRET)
        

        /**
         * If password matched
         */
        if (isMatch) {
            Cookie(res, "token", jwt, 15)
            return res.status(200).json(Message(true, `$Welcome Back ${isExist.firstName}`, { _id: isExist._id }))
        }

        /**
         * Password Not matched
         */

        return res.status(401).json(Message(false, "Incorrect Password", null))

    } catch (err) {
        console.log(err)
    }
}


/**
 * Logout
 */

export const Logout = (req,res) => {
    const {token} = req.cookies

    Cookie(res,"token","",0)
    res.status(200).send("Logout")
}