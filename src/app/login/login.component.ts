import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object;
  constructor(private loginService: LoginService) {
    this.user = {
      email: "",
      password: ""
    }
   }

  ngOnInit() {
    console.log(this.user);
  }

  login() {
    this.loginService.creatUser(this.user);
  }

}
