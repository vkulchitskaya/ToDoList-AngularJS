import { Task,TaskCollection } from './task';

const COLLECTION = 'collection';

let get = (key:string):string => {
    if (typeof key !== 'string' || localStorage.getItem(key) === null || localStorage.getItem(key) === undefined)	{
        return '';
    }
    return localStorage.getItem(key);
};

let set = (key:string, value:string):void => {
    if (typeof key !== 'string' || typeof value === 'undefined') {
        return;
    }
    localStorage.setItem(key, value);
};


export class Storage {
    taskCollection: TaskCollection;

    constructor() {
        this.taskCollection = this.loadCollection();
    }

    rewriteCollection():void {
        set(COLLECTION, this.taskCollection.serialize());
    }

    loadCollection():TaskCollection {

        var result:Task[] = [];
        var existCollection:string = get(COLLECTION);

        if (existCollection !== '') {

            result = JSON.parse(existCollection).map((i) => {
                return new Task(i.name, i.id, i.done);
            });

        } else {

            set(COLLECTION, JSON.stringify(result));

        }
        return new TaskCollection(result);
    }

    add(task:Task):void{
        this.taskCollection.add(task);
        this.rewriteCollection();
    }

    remove(id:number):void{
        this.taskCollection.remove(id);
        this.rewriteCollection();
    }

    perform(id:number):void{
        this.taskCollection.perform(id);
        this.rewriteCollection();
    }

    getTitle(id:number):string{
        return this.taskCollection.getTitle(id);
    }

    setTitle(newTitle:string,id:number):void{
        this.taskCollection.setTitle(newTitle,id);
        this.rewriteCollection();
    }

    isEdit(id:number):void{
        this.taskCollection.isEdit(id);
    }
}