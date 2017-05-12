import { Component, Input } from '@angular/core';
import { Task,TaskCollection } from './classes/task';
import { Storage } from './classes/storage';


@Component({
  selector: 'entry-field',
  template: `   
    <form>
      <input name="taskTitle" [(ngModel)]="taskTitle"  placeholder="Title...">
      <button (click)="addTask()">Add</button>
    </form>`
})

export class EntryField{
    taskTitle:string ='';
    
    addTask():void {
    let task:Task = new Task(this.taskTitle,0,false);
    this.taskTitle =''
    console.log(task);
    
  } 

}