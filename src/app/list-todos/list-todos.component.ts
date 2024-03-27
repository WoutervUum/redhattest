import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number, 
    public description: string,
    public completed : boolean,
    public targetDate: Date
    )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  todos = [
    new Todo (1, 'Learn to dance', false, new Date()),
    new Todo (2, 'Learn to Angular', false, new Date()),
    new Todo (3, 'Visit NL', true, new Date())
  ] 

  constructor() {}

  ngOnInit() {

  }
}
