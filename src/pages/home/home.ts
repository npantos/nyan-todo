import {Component, ElementRef} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {AddToDoPage} from "../add-to-do/add-to-do";
import {TodoService} from "../../shared/TodoService";
import {ToDoItemPage} from "../to-do-item/to-do-item";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    selectedItem: any;
    image:string = "https://usnimi.me/slike/2018/02/06/b7a-0.png";
    items: Array<{title: string, note: string}>;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public elementRef: ElementRef,
                public todoService: TodoService,
                public modalCtrl: ModalController
    ) {

        //console.log(network);

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        todoService.getAll().then((todos) => {
            this.items =  todos;
        });
        // for (let i = 1; i < 11; i++) {
        //     this.items.push({
        //         title: 'Item ' + i,
        //         note: 'This is item #' + i
        //     });
        // }
    }

    public selectItem(item){
        this.selectedItem = item;
        this.modalCtrl.create(ToDoItemPage, {todoItem: item}).present();



    }

    play(){
        var audio = this.elementRef.nativeElement.querySelector('#audio');

        if (!audio.paused) {
            audio.pause();
            this.image = "https://usnimi.me/slike/2018/02/06/b7a-0.png";
        } else {
            audio.play();
            this.image = "http://i0.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif";
        }

    }

    addNewTodo(){
        this.navCtrl.push(AddToDoPage);
    }

    delete(item){

        this.todoService.deleteItem(item);
    }

    edit(item){
        this.navCtrl.push(AddToDoPage);
    }
}