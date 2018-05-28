import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  // Local LARAVEL server
  server = 'localhost:4200/';

  header: Headers = new Headers;
  options: any;

  constructor(private http: Http) {
      this.header.append('enctype','multipart/form-data');
      this.header.append('Content-Type','application/json');
      this.header.append('X-Requested-With', 'XMLHttpRequest');
      this.options = new RequestOptions({ headers: this.header});
  }

  addStudent(info){
        var data = JSON.stringify(info);

        return this.http.post(this.server+"addstudent",data,this.options).map(res => res.json());
  }
}
