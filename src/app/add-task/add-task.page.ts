import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task: Todo = {
    userId: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTask() {
    this.todoService.addTask(this.task);
    this.task = {
      userId: 0,
      title: '',
      completed: false
    };
  }

}
