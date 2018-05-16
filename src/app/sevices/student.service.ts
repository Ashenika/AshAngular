import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  // Local LARAVEL server
  server = 'http://student/';

  header: Headers = new Headers;
  options: any;

  constructor(private http: Http) {
      this.header.append('enctype','multipart/form-data');
      this.header.append('Content-Type','application/json');
      this.header.append('X-Requested-With', 'XMLHttpRequest');
      this.options = new RequestOptions({ headers: this.header});
  }
}
