import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Todo } from '../classes/Todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  url = "http://localhost:8081/todo"

  constructor(private http: HttpClient) { }

  getAllTodos(){
    return this.http.get(this.url)
  }

  addTodo(todo:Todo){
    return this.http.post(this.url, todo)
  }

  editTodo(id, todo:Todo){
    const editUrl = `${this.url}/${id}`
    return this.http.put(editUrl, todo)
  }

  deleteTodo(todo:Todo){
    const delUrl =  `${this.url}/${todo._id}`
    console.log(delUrl);
    return this.http.delete(delUrl)
  }

}
