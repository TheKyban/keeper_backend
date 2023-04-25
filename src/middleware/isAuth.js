import USER from "../models/user.model.js"
import { Message } from "../utils/message.js"
import JWT from 'jsonwebtoken'

export const isAuth = async (req, res, next) => {

    const { token } = req.cookies

    if (token) {
        try {

            const decodedToken = JWT.decode(token, process.env.MY_SECRET)

            const isToken = await USER.findById(decodedToken.token)


            if (isToken) {
                req.user = isToken._id;
                next()
            }

        } catch (error) {
            /**
             * If Invalid token
             */
            return res.status(401).json(Message(false, "Logout and Then Login"))
        }
    } else {
        return res.status(400).json(Message(false, "Login First"))
    }

}