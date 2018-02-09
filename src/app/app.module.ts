import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Network} from "@ionic-native/network";
import {AddToDoPage} from "../pages/add-to-do/add-to-do";
import {TodoService} from "../shared/TodoService";
import {ToDoItemPage} from "../pages/to-do-item/to-do-item";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddToDoPage,
        ToDoItemPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios'
        }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddToDoPage,
        ToDoItemPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Network,
        TodoService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
