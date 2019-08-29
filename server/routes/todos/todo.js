
const TodoModel = require("../../models/todo")


module.exports = (express) => {
    const todoRoutes = express.Router()

    //regresar todos los TODOs
    todoRoutes.get("/",async (req, res)=>{ 
        
        let todos =  await TodoModel.find()
        res.status(200).json({
            Ok:true,
            todos
        })
    })
    todoRoutes.post("/", async (req, res)=>{
        let newTodo = new TodoModel(req.body);
        newTodo = await newTodo.save()
        res.json(newTodo)
    })
        

    //regresar un item de TODO
    todoRoutes.get("/:id_todo",(req, res)=>{
        console.log("hola");
    })
    //actulizar un item de TODO
    todoRoutes.put("/:id_todo",async (req, res)=>{
        const id = req.params.id_todo
        delete  req.body._id
        await TodoModel.findByIdAndUpdate(id,req.body)
        let updatedItem = await TodoModel.findById(id)
        res.json(updatedItem)
    })
    //borrar un item de TODO
    todoRoutes.delete("/:id_todo",async (req, res)=>{
        const id = req.params.id_todo
        await TodoModel.findByIdAndRemove(id)
        res.status(200).json({Ok:true, msn:"Todo borrado"})
    })
    
    return todoRoutes;
}


