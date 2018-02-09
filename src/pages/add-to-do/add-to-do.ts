import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TodoService} from "../../shared/TodoService";
import {HomePage} from "../home/home";

/**
 * Generated class for the AddToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-to-do',
  templateUrl: 'add-to-do.html',
})
export class AddToDoPage {

  title: string;
  note: string;
  date: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToDoPage');
  }

    addTodo() {
        this.todoService.addNew({title: this.title, note: this.note, date: new Date(this.date)});
    console.log(this.title);
    console.log(this.note);
    console.log(this.date);

    this.showSuccessMsg();
    this.navCtrl.push(HomePage);
    }

    showSuccessMsg(){
      this.alertCtrl.create({
          title:'Čestitamo',
          subTitle : 'Uspešno ste kreirali Todo',
          buttons: ['OK']
      }).present();
    }

}
