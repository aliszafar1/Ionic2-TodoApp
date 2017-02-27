import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
@Component({
    selector: 'signin',
    templateUrl: 'signin.html'
})

export class SigninPage {
    myForm: FormGroup;

    constructor(public navCtrl: NavController, fb: FormBuilder){ 
        this.myForm = fb.group({
            'uname': '',
            'pswd':''
        })
    }

    login(value){
        event.preventDefault();
        console.log('Your data is', value);
        this.navCtrl.push(HomePage);
    }

    signup(){
        console.log('Signup.........');
        this.navCtrl.push(SignupPage);
    }
}