import Todo from '../models/Todo.js';


export const addTodo = async (request,response) => {
    //console.log(request.body);
    //here validate todo
    try{
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        //save is a mongodb func that saves the data to mongodb...momgodb query is an asynchronous request as its running on a cloud & it needs time to run
        await newTodo.save();

        //now response has to be sent to frontend
        return response.status(200).json(newTodo);
    }catch(error){
        return response.status(500).json(error.message);
    }

}

export const getAllTodos = async(request,response) => {
    try{
        const todos = await Todo.find({}).sort({'createdAt': -1}) //created at -1 means that it will sort in descending order (by latest)
        return response.status(200).json(todos);
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async(request,response) => {
    try{
        const todoRef = await Todo.findById(request.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id},
            { done: !todoRef.done}
        )
        await todo.save();    

        return response.status(200).json(todo);
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const updateTodo = async(request,response) => {
    try{
        await Todo.findOneAndUpdate(
            { _id: request.params.id},
            { data: request.body.data}
        )
        //await todo.save();   
        
        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async(request,response) => {
    try{
        const todo = await Todo.findByIdAndDelete(request.params.id)
        //await todo.save();   

        return response.status(200).json(todo);
    }catch(error){
        return response.status(500).json(error.message);
    }
}