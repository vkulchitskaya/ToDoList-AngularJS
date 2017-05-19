import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task,TaskCollection } from './classes/task';
import { Storage } from './classes/storage';


@Component({
  selector: 'entry-field',
  template: `   
    <form>
      <input name="taskTitle" [(ngModel)]="taskTitle"  placeholder="Title...">
      <button (click)="addTask(taskTitle)">Add</button>
      <button (click)="change(true)">+</button>
    </form>`
})

export class EntryField{
    @Output() taskTitle:string ='';


    @Output() onChanged = new EventEmitter<boolean>();
    change(increased/*,taskTitle*/) {
        this.onChanged.emit(increased/*,taskTitle*/);
    }
    
    addTask(title:string):void {
    let task:Task = new Task(title,0,false);
    this.taskTitle =''
    console.log(task);
    
  } 

}