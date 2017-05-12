import { Component } from '@angular/core';
import { Task,TaskCollection } from './classes/task';
import { Storage } from './classes/storage';
import { EntryField } from './entry-field.component'


@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  directives : [EntryField],
  styleUrls: ['./css/app.component.css'],
  
})
export class AppComponent {
  title:string = 'Todoist AngularJS';
  storage:Storage = new Storage();
  taskTitle:string ='тест';
  taskEdit:string ='';
 
  addTask():void {
    let task:Task = new Task(this.taskTitle,0,false);
    this.storage.add(task);
    this.taskTitle =''
    this.taskEdit='' 
  } 

  removeTask(id:number):void{
      this.storage.remove(id);
  }

  performTask(id:number):void{
     this.storage.perform(id);
  }

  editTask(id:number):void{
    this.taskEdit=this.storage.getTitle(id);
    this.storage.isEdit(id);

  }

  setTitle(newTitle:string, id:number):void{
    this.storage.setTitle(newTitle,id);
    this.storage.isEdit(id);

  }

}






