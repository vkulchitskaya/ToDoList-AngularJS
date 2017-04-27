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
 
  addTask() {
    let task = new Task(this.taskTitle,0,false);
    this.tasks.add(task);
    this.taskTitle ='' 
  } 
  
  removeTask(){
      let id = event.srcElement.parentElement.id;
      this.tasks.remove(id);
  }

  performTask(){
     let id = event.srcElement.parentElement.parentElement.id;
     this.tasks.perform(id);
  }

}






