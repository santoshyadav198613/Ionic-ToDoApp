import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  todoList : Todo[];
  constructor(private todoService: TodoService) {
  
  }

  ngOnInit() {
    this.todoList =  this.todoService.getAllTask();
  }

}
