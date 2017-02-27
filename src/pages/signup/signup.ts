import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SigninPage } from '../signin/signin';
@Component({
    selector: 'signup',
    templateUrl: 'signup.html'
})

export class SignupPage {
    myForm: FormGroup;

    constructor(public navCtrl: NavController, fb: FormBuilder){ 
        this.myForm = fb.group({
            'uname': '',
            'pswd':''
        })
    }

    signup(value){
        event.preventDefault();
        console.log('Your data is', value);
        this.navCtrl.push(SigninPage)
    }
}