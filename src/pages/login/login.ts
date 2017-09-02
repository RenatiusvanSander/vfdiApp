import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, URLSearchParams } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;
  loginUrl: string = 'http://localhost:3000/';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginFormBuilder: FormBuilder,
    private http: Http,
    private messageBoxSuccessErr: AlertController
  )
  {

      // validate the inputs
      this.loginForm = loginFormBuilder.group({
        userName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser() {
    /*
    console.log('userName: ' + this.loginForm.value.userName);
    console.log('password: ' + this.loginForm.value.password);
    */

    // prepare the login params
    const prepareLoginData = new URLSearchParams();
    prepareLoginData.append('userName', this.loginForm.value.userName);
    prepareLoginData.append('password', this.loginForm.value.password);
    let loginData = prepareLoginData.toString();

    // send inputs to the api
    this
    .http
    .post(this.loginUrl, loginData)
    .map((response) => response.text() )
    .subscribe(data => {

      //prepare messagebox for success
      let messageBoxSuccess = this.messageBoxSuccessErr.create({
        title: 'Successfully logged in',
        message: 'Successful logged in!',
        buttons: ['OK']
      });

      // show the box
      messageBoxSuccess.present();
    },
      err => {
        //prepare messagebox for error
      let messageBoxErr = this.messageBoxSuccessErr.create({
        title: 'please register',
        message: 'You have not an user account!',
        buttons: ['OK']
      });

      // show the error box
      messageBoxErr.present();
      });
  }

}
