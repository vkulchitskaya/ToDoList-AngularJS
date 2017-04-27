import { Component } from '@angular/core';
import { Task,TaskCollection } from './task';
import { Storage } from './storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todoist AngularJS';
  storage = new Storage();
  taskTitle ='';
 
  addTask() {
    let task = new Task(this.taskTitle,0,false);
    this.storage.add(task);
    this.taskTitle ='' 
  } 

  removeTask(id){
      this.storage.remove(id);
  }

  performTask(id){
     this.storage.perform(id);
  }

}






