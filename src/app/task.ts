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

    addTask(task) {
        if (task.name !==""){
            task.id=this.nextId(); 
            this.taskCollection.push(task);
        }
    }
     nextId() {
        return this.taskCollection.reduce((prev, cur) => {
            return (prev.id > cur.id) ? prev : cur;
        }, new Task('', 0, false)).id + 1;
    }
}