export class Task{
  name:string;
  id:number;
  done:boolean;
}

export class TaskCollection{
    taskCollection:Task[]=[];
    add(task) :void {
        //this.taskCollection.push(task);
    }    
}