import { CreateTask, GetAll, deleteTask } from "../controllers/task.controller.js";
import { isAuth } from "../middleware/isAuth.js";
import Task from "../models/task.model.js";
import expres, { Router } from 'express'

const express = expres()
const taskRouter  = expres.Router()

/**
 * Get
 */

taskRouter.get("/all",isAuth,GetAll)

/**
 * Post
 */

taskRouter.post("/new",isAuth,CreateTask)

/**
 * Put
 */

/**
 * Delete
 */

taskRouter.delete("/delete",isAuth,deleteTask)

export default taskRouter