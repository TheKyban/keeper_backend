import Task from "../models/task.model.js";
import { Message } from "../utils/message.js";

export const GetAll = async (req, res) => {
    try {
        const userId = req.user;
        const allTask = await Task.find({ userId })

        return res.status(200).json(Message(true, "Done", allTask))
    } catch (err) {
        console.log(err)
    }

}



export const CreateTask = async (req, res) => {

    try {
        const {title,description} = req.body;

        const userId = req.user;
        const task = await Task.create({
          title,description,userId  
        })

        return res.status(201).json(Message(true, "Done", task))
    } catch (err) {
        console.log(err)
    }
}

export const deleteTask = async (req,res) => {
    try {
        const {_id} = req.body

        const delTask = await Task.deleteOne({_id})

        res.status(201).json(delTask)
    } catch (error) {
        console.log(error)
    }
}