import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ToDoItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-to-do-item',
    templateUrl: 'to-do-item.html',
})
export class ToDoItemPage {

    todoItem: {
        title: string,
        note: string,
        date: Date
    };

    constructor(public navCtrl: NavController,

                public navParams: NavParams) {
        this.todoItem = this.navParams.get('todoItem')
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ToDoItemPage');
    }

    dismiss() {
        this.navCtrl.pop();
    }

}
