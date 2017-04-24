import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todoist AngularJS';
  tasks = TaskCollection;
}


export class Task{
  name:string;
  id:number;
  done:boolean;
}

const TaskCollection: Task[] = [
   { name: 'Отобразить список задач', id:2,done:false },
   { name: 'Добавление', id:3,done:false },
   { name: 'Удаление', id:4,done:false },
   { name: 'Редактирование', id:5,done:false },
   { name: 'Хранение в памяти', id:5,done:false }

]


