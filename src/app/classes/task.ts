export class Task{
  name:string;
  id:number;
  done:boolean;
  edit:boolean;

  constructor(name:string,id:number,done:boolean){
      this.name = name;
      this.id = id;
      this.done = done;
      this.edit = false;
  }
}

export class TaskCollection {
    taskCollection: Task[];

    constructor(tasks:Task[]) { 
        this.taskCollection = tasks;
    }

    add(task:Task):void {
        if (task.name !==""){
            task.id=this.nextId(); 
            this.taskCollection.push(task);
        }
    }
    remove(id:number):void {
        this.taskCollection = this.taskCollection.filter(function (v) {
            return	v.id !== id;
        });
    }

    nextId():number {
        return this.taskCollection.reduce((prev, cur) => {
            return (prev.id > cur.id) ? prev : cur;
        }, new Task('', 0, false)).id + 1;
    }

    perform(id:number):void {
        this.taskCollection.forEach(function (item) {
            if (item.id === id) {
                item.done=!item.done;
            }
        });
    }
    serialize():string {
        return JSON.stringify(this.taskCollection);
    }

    isEdit(id:number):void{
        this.taskCollection.forEach(function (item) {
            if (item.id === id) {
                item.edit=!item.edit;
            }
        });
    }

    getTitle(id:number):string {
        var task:Task[];
        task = this.taskCollection.filter(function(item){
            return item.id == id;
        });
        console.log(task[0].name);
        return task[0].name;
    }

    setTitle(newTitle:string,id:number){
         this.taskCollection.forEach(function (item) {
            if (item.id === id) {
                item.name=newTitle;
            }
        });       
    }


}