import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  creatUser(userinfo) {
    console.log(userinfo);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/newuser', JSON.stringify(userinfo), {headers: headers}).map(res => res.json);
  }


}
