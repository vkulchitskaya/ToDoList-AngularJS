import { Task,TaskCollection } from './task';

const COLLECTION = 'collection';

let get = (key) => {
    if (typeof key !== 'string' || localStorage.getItem(key) === null || localStorage.getItem(key) === undefined)	{
        return null;
    }
    return localStorage.getItem(key);
};

let set = (key, value) => {
    if (typeof key !== 'string' || typeof value === 'undefined') {
        return;
    }
    localStorage.setItem(key, value);
};


export class Storage {
    taskCollection: TaskCollection;

    constructor() {
        this.taskCollection = this.loadCollection();
        console.log(this.taskCollection);
    }

    rewriteCollection() {
        set(COLLECTION, this.taskCollection.serialize());
    }

    loadCollection() {

        var result = [];
        var existCollection = get(COLLECTION);

        if (existCollection !== null) {

            result = JSON.parse(existCollection).map((i) => {
                return new Task(i.name, i.id, i.done);
            });

        } else {

            set(COLLECTION, JSON.stringify(result));

        }

        return new TaskCollection(result);
    }
    add(task){
        this.taskCollection.add(task);
        this.rewriteCollection();
    }

    remove(id){
        this.taskCollection.remove(id);
        this.rewriteCollection();
    }

    perform(id){
        this.taskCollection.perform(id);
        this.rewriteCollection();
    }






}