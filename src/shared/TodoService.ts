import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()

export class TodoService{

    todos: Array<{title: string, note: string, date: Date}>;

    constructor(private storage: Storage){

    }

    addNew(item){
        this.todos = this.todos || [];

            this.todos.push(item);
        this.storage.set('todos',this.todos);
    }

    getAll(){
        return this.storage.get('todos').then((todos) => {
            return todos || [];
        }).then((todos) => {
            this.todos = todos;
            return this.todos;
        });
    }

    deleteItem(item){
        console.log(item);
        const index = this.todos.indexOf(item);
        this.todos.splice(index, 1);
        this.storage.set('todos',this.todos);

    }


}