import mongoose from 'mongoose';

//if frontend data valid or not that need to be checked using schema of mongoose

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type : Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
})   

const todo = mongoose.model('todo',TodoSchema);

export default todo;