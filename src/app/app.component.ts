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
  taskTitle ='';
 

   clicked() :void {
        let task = new Task(this.taskTitle,0,false);
        this.tasks.addTask(task);
        this.taskTitle ='' 
        console.log(this.tasks.taskCollection);
  }    
}






