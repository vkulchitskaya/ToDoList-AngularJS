import { Component } from '@angular/core';
import { Task,TaskCollection } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todoist AngularJS';
  tasks:TaskCollection;
   clicked() :void {
        let task = {name:'test',id:10,done:false};
        //this.tasks.add(task); // не видит метод add
        console.log(this.tasks); // почему undefined, а не []
  }    
}






