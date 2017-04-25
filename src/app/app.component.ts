import { Component } from '@angular/core';
import { Task,TaskCollection } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todoist AngularJS';
  tasks = new TaskCollection();
  // По нажатию кнопки в список задач добавляется тестовая задача
   clicked() :void {
        let task = {name:'test',id:10,done:false};
        this.tasks.add(task); 
        console.log(this.tasks.taskCollection);
  }    
}






