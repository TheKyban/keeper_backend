import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId:mongoose.Types.ObjectId
})



export default mongoose.model("Task",TaskSchema)