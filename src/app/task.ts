export class Task{
  name:string;
  id:number;
  done:boolean;

  constructor(name,id,done){
      this.name = name;
      this.id = id;
      this.done = done;
  }
}

export class TaskCollection {
    taskCollection: Task[];

    constructor() { 
        this.taskCollection = [];
    }

    add(task) :void {
        this.taskCollection.push(task);
    }    
}