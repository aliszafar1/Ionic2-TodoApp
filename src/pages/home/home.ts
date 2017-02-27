import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SigninPage } from '../signin/signin';

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class HomePage{
    tasks = ['Programme Ionic', 'Learn Redux', 'Start Portfolio'];

     myForm: FormGroup;

    constructor(public navCtrl: NavController, fb: FormBuilder){ 
        this.myForm = fb.group({
            'task': ''
        })
    }

    logout(){
        this.navCtrl.push(SigninPage);
    }

    addItem(value){
        console.log(value);
        this.tasks.push(value.task);
    }

    onDelete(value){
        this.tasks.splice(value, 1);
    }

}