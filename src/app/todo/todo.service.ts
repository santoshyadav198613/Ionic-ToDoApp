import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [];

  constructor() { }

  addTask(task: Todo) {
    this.todo.push(task);
  }

  getAllTask(): Todo[] {
    return this.todo;
  }

  getCompletedtask(): Todo[] {
    return this.todo.filter((task) => task.completed === true);
  }

}
