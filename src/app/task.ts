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

    add(task) {
        if (task.name !==""){
            task.id=this.nextId(); 
            this.taskCollection.push(task);
        }
    }
    remove(id) {
        this.taskCollection = this.taskCollection.filter(function (v) {
            return	v.id !== parseInt(id);
        });
    }

    nextId() {
        return this.taskCollection.reduce((prev, cur) => {
            return (prev.id > cur.id) ? prev : cur;
        }, new Task('', 0, false)).id + 1;
    }

    perform(id) {
        this.taskCollection.forEach(function (item) {
            if (item.id === Number(id)) {
                item.done=!item.done;
            }
        });
    }

}