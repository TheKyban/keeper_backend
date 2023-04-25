import { CreateNewUser, Login, Logout } from '../controllers/user.controller.js';
import { isAuth } from '../middleware/isAuth.js';
import USER from '../models/user.model.js'


import express from 'express'

const Router = express.Router()

/**
 * Get
 */

Router.get("/logout",isAuth,Logout)

/**
 * POST
 */

Router.post('/new',CreateNewUser) // Register new User

Router.post("/login",Login) // Login existing User

export default Router;