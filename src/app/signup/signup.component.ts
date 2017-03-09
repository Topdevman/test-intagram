import { Component, OnInit } from '@angular/core';
import {SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newuser: Object;
  email: String;
  username: String;
  password: String;
  name: String;  
  constructor(private signupService: SignupService) {
    this.newuser = {
      email: '',
      username: '',
      password: '',
      name: ''
    }
  }

  ngOnInit() {
  }

  signup() {    
    this.signupService.creatUser(this.newuser).subscribe(task =>{
      console.log("Send Data.");
    });
  }
}
