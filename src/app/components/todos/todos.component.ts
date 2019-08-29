import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoServiceService } from '../../services/todo-service.service'
import { Todo } from '../../classes/Todo.class'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})



export class TodosComponent implements OnInit {

    TodoForm: FormGroup
    allTodos: Array<Todo> = []
    editing:Boolean = false
    todoEditing:Todo


  constructor(
    private _ts: TodoServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buildTodoForm()
    //this.TodoForm.valueChanges.subscribe(console.log)
    this.getAllTodos()    
  }

  deleteItem(item:Todo){
    this._ts.deleteTodo(item).subscribe(value =>{
      if(value['Ok']) this.getAllTodos()  
    })
    
  }

  editItem(){
    const id = this.todoEditing._id 
    this.todoEditing = this.TodoForm.value 
    console.log(this.todoEditing);
    this._ts.editTodo(id, this.todoEditing).subscribe(value=>{
      console.log(value)
      if(value) {
        this.getAllTodos()
        this.TodoForm.reset()
        this.editing = false
        this.todoEditing = null
      }  
    })
  }

  prepareToEdit(todo:Todo){
    this.editing = true
    this.todoEditing = todo
    this.TodoForm.patchValue(todo)
  }

  completarTarea(todo:Todo){ 
    todo.complete_todo = !todo.complete_todo
    console.log(todo);
    this._ts.editTodo(todo._id, todo ).subscribe( value =>{
      console.log(value);
    })

  }

  getAllTodos(){
    this._ts.getAllTodos().subscribe(value => {
      this.allTodos = value['todos']
      console.log(value['todos'])
    })
  }

  
  saveTodo(){
    if (!this.TodoForm.dirty && !this.TodoForm.valid) console.log("invalid form")
    let newTodo: Todo = this.TodoForm.value
    newTodo.complete_todo = false
    this._ts.addTodo(newTodo).subscribe(value => {
      if(value) this.getAllTodos()
    }) 
    //this.getAllTodos()
    this.TodoForm.reset()
  }
  
  buildTodoForm() {
    this.TodoForm = this.fb.group({
      text_todo: ["", Validators.required],
      complete_todo: false
    })
  }

  today(){ return new Date()}

}
