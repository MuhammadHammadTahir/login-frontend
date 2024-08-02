import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  validate(username: string, password: string)
  {
    console.log(username);
    this.http.get('http://localhost:3000/login/'+username+'/'+password).subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        console.log(data);
      } else {
        console.log("failed");
      }
    }); 
  }
  create(username: string, password: string)
  {
    console.log(username);
    this.http.post('http://localhost:3000/login/', {username, password}).subscribe(data => {
      console.log(data);
    }); 
  }
}
