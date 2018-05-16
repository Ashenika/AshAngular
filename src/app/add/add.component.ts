import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StudentService} from "../sevices/student.service";
import {Student} from '../student';

declare var  $:any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file_src: string = 'assets/images/profile.png';


  constructor(private router: Router, private StudentService: StudentService) {


  }

  ngOnInit() {
  }

  model = new Student()

  imageUploaded(file: any){
    $('img').hide();
  }
  
  imageRemoved(file: any){
    $('img').show();
  }

  addStudent(){
    this.StudentService.addStudent(this.model).subscribe(response => {console.log(response);})
  }
  
}

